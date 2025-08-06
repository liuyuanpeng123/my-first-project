<template>
    <div>
        <TableSearch :query="query" :options="searchOpt" :search="handleSearch" />
        <div class="container">
            <TableCustom :columns="columns" :tableData="tableData" :total="page.total" :viewFunc="handleView"
                :delFunc="handleDelete" :page-change="changePage" :editFunc="handleEdit" :switchFunc="switchFunc" :refresh="getData">
                <template #toolbarBtn>
                    <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true">新增</el-button>
                </template>
            </TableCustom>

        </div>
        <el-dialog :title="isEdit ? '编辑' : '新增'" v-model="visible" width="25%" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData" @child-call="closeDialog"/>
        </el-dialog>
        <el-dialog title="查看详情" v-model="visible1" width="700px" destroy-on-close>
            <TableDetail :data="viewData"></TableDetail>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="kanban">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { Model } from '@/types/kanban';
import { fetchModelData,fetchModelDel ,fetchModelDataPage ,fetchModelUpdate,fetchModelAdd} from '@/api/kanban';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

interface modeRouter  {
    name:string;
    uri:string;
    value:string;
    label:string;
}

const opts = reactive<modeRouter[]>([
    {name:'智慧手术运营管理系统',uri:'model1',value:'model1',label:'智慧手术运营管理系统'},
    {name:'手术部看板中心',uri:'model2',value:'model2',label:'手术部看板中心'},
    {name:'智慧手术运营管理中心',uri:'model3',value:'model3',label:'智慧手术运营管理中心'}
]);

// 查询相关
const query = reactive({
    searchMsg: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: '名称', prop: 'searchMsg' },
])
const handleSearch = () => {
    changePage(1);
};

// 表格相关
let columns = ref([
    { type: 'index', label: '序号', width: 55, align: 'center' },
    { prop: 'name', label: '名称' },

    { prop: 'operator', label: '操作', width: 250 },
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
    searchMsg:query.searchMsg
})
const tableData = ref<Model[]>([]);
const getData = async () => {
    let params = {
        page : page.index,
        limit : page.size,
        searchMsg: query.searchMsg
    }
    const res = await fetchModelDataPage(params)
    // console.log(res)
    tableData.value = res.data.data.list;
    page.total = res.data.data.queryTotal;
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 24,
    list: [
        { type: 'input', label: '看板名称', prop: 'name', required: true },
        { type: 'select', label: '看板', prop: 'uri', opts: opts }
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: Model) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
    
};
const updateData = async (row: Model) => {
    console.log(row)
    if(isEdit.value){
        const  res = await fetchModelUpdate(row)
        console.log(res)
        if(res.data.status == 0){
            closeDialog();
            getData();
            ElMessage.success('修改成功');
        }
    }else{
        const  res = await fetchModelAdd(row)
        console.log(res)
        if(res.data.status == 0){
            closeDialog();
            getData();
            ElMessage.success('新增成功');
        }
    }
    
};

const closeDialog = () => {
    visible.value = false;
    isEdit.value = false;
};

// 查看详情弹窗相关
const visible1 = ref(false);
const viewData = ref({
    row: {},
    list: []
});
const handleView = (row: Model) => {
    console.log(row)
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: '用户ID',
        },
        {
            prop: 'name',
            label: '看板名称',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = async (row: Model)  => {
    
    const  res = await fetchModelDel(row)
    console.log(res)
    if(res.data.status == 0){
        getData();
        ElMessage.success('删除成功');
    }
}

//开关相关
const switchFunc = (row:Model) =>{
    console.log(row)
}
</script>

<style scoped></style>
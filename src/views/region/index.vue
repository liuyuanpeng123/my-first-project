<template>
    <div>
        <!-- <TableSearch :query="query" :options="searchOpt" :search="handleSearch" /> -->
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

<script setup lang="ts" name="region">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { Region } from '@/types/region';
import { fetchModelhasByIP,fetchModelDel ,fetchModelDataPage ,fetchModelUpdate,fetchModelAdd} from '@/api/region';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';




// 查询相关
const query = reactive({
    ip: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: '客户端IP', prop: 'ip' },
])


// 表格相关
let columns = ref([
    { type: 'index', label: '序号', width: 55, align: 'center' },
    { prop: 'region', label: '区域名称' },
    { prop: 'ip', label: '客户端IP' },
    { prop: 'operator', label: '操作', width: 250 },
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
    
})
const tableData = ref<Region[]>([]);
const getData = async () => {
    let params = {
        page : page.index,
        limit : page.size,
      
    }
    const res = await fetchModelDataPage(params)
    // console.log(res)
    tableData.value = res.data.data;
    // page.total = res.data.data.queryTotal;
};
getData();

const handleSearch = async () => {
    let params = {
        ip:query.ip
    }

    const res = await fetchModelhasByIP(params)
    console.log(res)
    tableData.value = res.data.data;
};
const changePage = (val: number) => {
    page.index = val;
    getData();
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 24,
    list: [
        { type: 'input', label: '区域名称', prop: 'region' },
        { type: 'input', label: '客户端IP', prop: 'ip', required: true },
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: Region) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
    
};
const updateData = async (row: Region) => {
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
const handleView = (row: Region) => {
    console.log(row)
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: '用户ID',
        },
        {
            prop: 'region',
            label: '区域名称',
        },
        {
            prop: 'ip',
            label: '客户端IP',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = async (row: Region)  => {
    
    const  res = await fetchModelDel(row)
    console.log(res)
    if(res.data.status == 0){
        getData();
        ElMessage.success('删除成功');
    }
}

//开关相关
const switchFunc = (row:Region) =>{
    console.log(row)
}
</script>

<style scoped></style>
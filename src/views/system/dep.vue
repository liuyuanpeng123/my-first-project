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
        <el-dialog :title="isEdit ? '编辑' : '新增'" v-model="visible" width="700px" destroy-on-close
            :close-on-click-modal="false" @close="closeDialog">
            <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData" @child-call="closeDialog"/>
        </el-dialog>
        <el-dialog title="查看详情" v-model="visible1" width="700px" destroy-on-close>
            <TableDetail :data="viewData"></TableDetail>
        </el-dialog>
    </div>
</template>

<script setup lang="ts" name="system-dep">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { Dep } from '@/types/dep';
import { fetchDepData,fetchDepAdd ,fetchDepUpdate,fetchDeprDel } from '@/api';
import { fetchModelData} from '@/api/kanban';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

// const opts = [
//     {label:"1",value:"1"}
// ]
const opts = reactive<Dep[]>([]);
const getModlData = async () => {
    try {
    const res = await fetchModelData();
    // 转换数据格式，添加value和label字段
    const formattedData = res.data.data.map(item => ({
      ...item,
      value: item.id,          // value等于id
      label: item.name  // label等于departmentName
    }));
    
    opts.splice(0, opts.length, ...formattedData);
    console.log('处理后的opts:', opts);
  } catch (error) {
    console.error('获取部门数据失败', error);
  }
    
};
getModlData()
// 查询相关
const query = reactive({
    name: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: '科室名称：', prop: 'departmentName' },
    { type: 'input', label: '看板名称', prop: 'boardName' },
    { type: 'select', label: '看板', prop: 'modeId', opts: opts }
])
const handleSearch = () => {
    changePage(1);
};

// 表格相关
let columns = ref([
    { type: 'index', label: '序号', width: 55, align: 'center' },
    { prop: 'departmentName', label: '科室名称' },
    { prop: 'name', label: '人数' },
    { prop: 'boardName', label: '看板名称' },
    { 
        prop: 'isEnable', 
        label: '是否启用', 
        renderType: 'switch' 
    },
    { prop: 'operator', label: '操作', width: 250 },
])
const page = reactive({
    index: 1,
    size: 10,
    total: 0,
})
const tableData = ref<Dep[]>([]);
const getData = async () => {
    const res = await fetchDepData()
    console.log(res)
    tableData.value = res.data.data;
    page.total = res.data.pageTotal;
};
getData();

const changePage = (val: number) => {
    page.index = val;
    getData();
};

// 新增/编辑弹窗相关
let options = ref<FormOption>({
    labelWidth: '100px',
    span: 12,
    list: [
        { type: 'input', label: '科室名称', prop: 'departmentName', required: true },
        { type: 'select', label: '看板', prop: 'modeId', required: true, opts: opts},
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: Dep) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
};
const updateData = async (row: Dep) => {
    console.log(row)
    console.log(isEdit)
    if(isEdit.value){
        const  res = await fetchDepUpdate(row)
        console.log(res)
        if(res.data.status == 0){
            closeDialog();
            getData();
            ElMessage.success('修改成功');
        }
    }else{
        const  res = await fetchDepAdd(row)
        console.log(res)
        if(res.data.status == 0){
            closeDialog();
            getData();
            ElMessage.success('新增成功');
        }
    }

    closeDialog();
    getData();
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
const handleView = (row: Dep) => {
    console.log(row)
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: '用户ID',
        },
        {
            prop: 'departmentName',
            label: '科室名称',
        },
        {
            prop: 'boardName',
            label: '看板名称',
        },
        {
            prop: 'email',
            label: '人数',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = async (row: Dep) => {
    const  res = await fetchDeprDel(row)
    console.log(res)
    if(res.data.status == 0){
        getData();
        ElMessage.success('删除成功');
    }
}

//开关相关
const switchFunc = async (row:Dep) =>{
    console.log(row)
    const  res = await fetchDepUpdate(row)
        console.log(res)
        if(res.data.status == 0){
            ElMessage.success('修改成功');
        }
}
</script>

<style scoped></style>
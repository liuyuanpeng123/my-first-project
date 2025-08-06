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

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { CirclePlusFilled } from '@element-plus/icons-vue';
import { User } from '@/types/user';
import { Dep } from '@/types/dep';
import { fetchUserData,fetchDepData,fetchUserDel ,fetchUserDataPage ,fetchUserUpdate,fetchUserAdd} from '@/api';
import TableCustom from '@/components/table-custom.vue';
import TableDetail from '@/components/table-detail.vue';
import TableSearch from '@/components/table-search.vue';
import { FormOption, FormOptionList } from '@/types/form-option';

// const opts = [
//     {label:"1",value:"1"}
// ]
const opts = reactive<Dep[]>([]);
const getDepData = async () => {
    try {
    const res = await fetchDepData();
    // 转换数据格式，添加value和label字段
    const formattedData = res.data.data.map(item => ({
      ...item,
      value: item.id,          // value等于id
      label: item.departmentName  // label等于departmentName
    }));
    
    opts.splice(0, opts.length, ...formattedData);
    console.log('处理后的opts:', opts);
  } catch (error) {
    console.error('获取部门数据失败', error);
  }
    
};
getDepData()
// 查询相关
const query = reactive({
    name: '',
});
const searchOpt = ref<FormOptionList[]>([
    { type: 'input', label: '登录账号：', prop: 'username' },
    { type: 'input', label: '用户名称', prop: 'name' },
    { type: 'select', label: '科室', prop: 'did', opts: opts }
])
const handleSearch = () => {
    changePage(1);
};

// 表格相关
let columns = ref([
    { type: 'index', label: '序号', width: 55, align: 'center' },
    { prop: 'username', label: '登录账号' },
    { prop: 'name', label: '用户名称' },
    { prop: 'departmentName', label: '科室' },
    { prop: 'job', label: '职务' },
    { 
        prop: 'isBoard', 
        label: '是否查看看板', 
        renderType: 'switch' 
    },
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
const tableData = ref<User[]>([]);
const getData = async () => {
    let params = {
        page : page.index,
        limit : page.size,
        searchMsg: ""
    }
    const res = await fetchUserDataPage(params)
    const formattedData = res.data.data.list.map(item => ({
        ...item,
        departmentName: item.scDepartment?.departmentName || ''
    }));
    // console.log(res)
    tableData.value = formattedData;
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
    span: 12,
    list: [
        { type: 'input', label: '登录账号', prop: 'username', required: true },
        { type: 'input', label: '用户名称', prop: 'name', required: true },
        { type: 'input', label: '密码', prop: 'password', required: true },
        { type: 'select', label: '科室', prop: 'did', required: true, opts: opts},
        { type: 'input', label: '职务', prop: 'job', required: true },
    ]
})
const visible = ref(false);
const isEdit = ref(false);
const rowData = ref({});
const handleEdit = (row: User) => {
    rowData.value = { ...row };
    isEdit.value = true;
    visible.value = true;
    
};
const updateData = async (row: User) => {
    console.log(row)
    if(isEdit.value){
        const  res = await fetchUserUpdate(row)
        console.log(res)
        if(res.data.status == 0){
            closeDialog();
            getData();
            ElMessage.success('修改成功');
        }
    }else{
        const  res = await fetchUserAdd(row)
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
const handleView = (row: User) => {
    console.log(row)
    viewData.value.row = { ...row }
    viewData.value.list = [
        {
            prop: 'id',
            label: '用户ID',
        },
        {
            prop: 'username',
            label: '登录账号',
        },
        {
            prop: 'name',
            label: '用户名称',
        },
        {
            prop: 'password',
            label: '密码',
        },
        {
            prop: 'departmentName',
            label: '科室',
        },
        {
            prop: 'job',
            label: '职务',
        }
    ]
    visible1.value = true;
};

// 删除相关
const handleDelete = async (row: User)  => {
    
    const  res = await fetchUserDel(row)
    console.log(res)
    if(res.data.status == 0){
        getData();
        ElMessage.success('删除成功');
    }
}

//开关相关
const switchFunc = (row:User) =>{
    console.log(row)
}
</script>

<style scoped></style>
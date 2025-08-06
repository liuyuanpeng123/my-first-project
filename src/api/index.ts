import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './mock/table.json',
        method: 'get'
    });
};

//获取所有用户列表
export const fetchUserData = () => {
    return request({
        url: '/admin/AdminUsers/hasAll',
        method: 'get'
    });
};
export const fetchUserDataPage = (params:any) => {
    return request({
        url: '/admin/AdminUsers/hasAllToPage',
        method: 'get',
        params
    });
};

export const fetchUserAdd = (data :any) => {
    return request({
      url: '/admin/AdminUsers/update',
      method: 'post',
      data
    })
}
export const fetchUserUpdate = (data :any) => {
    return request({
      url: '/admin/AdminUsers/update',
      method: 'post',
      data
    })
}
export const fetchUserDel = (data :any) => {
    return request({
      url: '/admin/AdminUsers/delete',
      method: 'post',
      data
    })
}

export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get'
    });
};

export const DeleteKey = (data :any) => {
    return request({
      url: '/Config/delete',
      method: 'post',
      data
    })
}


//获取所有科室列表
export const fetchDepData = () => {
    return request({
        url: '/ScDepartment/hasAll',
        method: 'get'
    });
};
export const fetchDepAdd = (data :any) => {
    return request({
        url: '/ScDepartment/add',
        method: 'post',
        data
    });
};
export const fetchDepUpdate = (data :any) => {
    return request({
      url: '/ScDepartment/update',
      method: 'post',
      data
    })
}
export const fetchDeprDel = (data :any) => {
    return request({
      url: '/ScDepartment/delete',
      method: 'post',
      data
    })
}




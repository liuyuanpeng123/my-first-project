import request from '../utils/request';
//获取所有看板列表
export const fetchModelData = () => {
    return request({
        url: '/ScMode/hasAll',
        method: 'get'
    });
};
export const fetchModelDataPage = (params:any) => {
    return request({
        url: '/ScMode/hasAllToPage',
        method: 'get',
        params
    });
};

export const fetchModelAdd = (data :any) => {
    return request({
      url: '/ScMode/add',
      method: 'post',
      data
    })
}
export const fetchModelUpdate = (data :any) => {
    return request({
      url: '/ScMode/update',
      method: 'post',
      data
    })
}
export const fetchModelDel = (data :any) => {
    return request({
      url: '/ScMode/delete',
      method: 'post',
      data
    })
}





import request from '../utils/request';
//获取所有看板列表
export const fetchModelData = () => {
    return request({
        url: '/ScRegion/hasAll',
        method: 'get'
    });
};
export const fetchModelhasByIP = (params:any) => {
    return request({
        url: '/ScRegion/hasByIP',
        method: 'get',
        params
    });
};
export const fetchModelDataPage = (params:any) => {
    return request({
        url: '/ScRegion/hasAll',
        method: 'get',
        params
    });
};

export const fetchModelAdd = (data :any) => {
    return request({
      url: '/ScRegion/add',
      method: 'post',
      data
    })
}
export const fetchModelUpdate = (data :any) => {
    return request({
      url: '/ScRegion/update',
      method: 'post',
      data
    })
}
export const fetchModelDel = (data :any) => {
    return request({
      url: '/ScRegion/delete',
      method: 'post',
      data
    })
}
export const submitip = () => {
    return request({
      url: '/Config/submitip',
      method: 'post'
    })
}




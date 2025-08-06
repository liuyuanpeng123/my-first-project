import request from '@/utils/request'

export const ShowTodayOperatingCount = (params?:any) => {
  return request({
    url: '/nanhua/ShowTodayOperatingCount',
    method: 'get',
    params
  })
}

export const ShowOperatingTypeCount = (params?:any) => {
  return request({
    url: '/nanhua/ShowOperatingTypeCount',
    method: 'get',
    params
  })
}
export const ShowRoomMsg = (params?:any) => {
  return request({
    url: '/nanhua/ShowRoomMsg',
    method: 'get',
    params
  })
}
export const ShowRooms = (params?:any) => {
  return request({
    url: '/nanhua/ShowRooms',
    method: 'get',
    params
  })
}




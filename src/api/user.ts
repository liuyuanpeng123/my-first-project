import request from '@/utils/request'

export const Login = (params :any) => {
  return request({
    url: '/user/login',
    method: 'get',
    params
  })
}

export const getInfo = (token :any) => {
  return request({
    url: '/login/hasLoginMsg',
    method: 'get',
    params: { token }
  })
}



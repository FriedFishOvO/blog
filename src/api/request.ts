import axios from 'axios'

const _axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL
})

// axios.interceptors.request.use(
//     (request) => { //请求成功时做的事
//         request.headers.setAuthorization('aaa.bbb.cc')
//         return request
//     },
//     (error) => { //请求失败时做的事
//         return Promise.reject(error)
//     }
// )

// axios.interceptors.response.use(
//     (response) => { //状态码是2xx
//         return response
//     },
//     (error) => { //状态码不是2xx
//         if (error.response.status == 404) {
//             //情况1
//         } else if (error.response.status == 405) {
//             //情况2
//         }
//         //以此类推
//         return Promise.resolve({}) //异常处理后返回成功结果
//     }
// )

export default _axios //导出自定义axios对象
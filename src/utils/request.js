import axios from 'axios';

  const base = 'http://192.168.1.6:8080/'

const service = axios.create({
    baseURL: base, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000,// request ti meout
    headers: {
        'appKey': 'wlnet.wxapp',
        'accessToken': '21020bg5f46hh1e7b7dbgy888e2fa116c5f8c4abac03eaa322798726',
        'Authorization': localStorage.getItem("token"),
    }
})

// request interceptor 请求拦截器
service.interceptors.request.use(
    config => {
        console.log('请求 --- ', config)

        return config
    },
    error => {
        // do something with request error
        console.log('请求错误 --- ', error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor 响应拦截器
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */

    response => {
        console.log('响应 --- ', response.config.url, response.data)

        return response
    },
    error => {
        console.warn('响应err ---' + error) // for debug

        return Promise.reject(error)
    }
)

export default service

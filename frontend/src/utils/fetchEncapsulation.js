import axios from 'axios'
// import store from '../store';

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://192.168.0.119:8100', //api的base_url
  timeout: 20000, // 请求超时时间
  withCredentials: false, //https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials,
  // responseType:"",
  data: {
    // appversion:"v1.0",
    // netNo:"wts",
    // token:''
  }, //默认POST参数
  params: {
    // appversion:"v1.0",
    // netNo:"wts",
  } //默认GET参数
  // headers: {'X-Custom-Header': 'foobar'},
})

// service.defaults.headers.PAWH0A0RZV2Q='8'
// sessionStorage.getItem('SessionID')
// request拦截器
service.interceptors.request.use(
  config => {
    Indicator.open({
      // text: '加载中...',
      spinnerType: 'fading-circle'
    })

    config.headers = {
      //'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0JpbmRNb2JpbGUiOiJ0cnVlIiwiYXVkIjoiQVBQIiwib3BlbklkIjoiYXNkZmFzZGYiLCJpc3MiOiJTZXJ2aWNlIiwiZXhwIjoxNTU4NTkyNzE2LCJpYXQiOjE1NTYwMDA3MTYsIm1lbWJlcklkIjoiMTIzMSJ9.g6qb0ERF3yIyw42zYpJ1PLfo297hPsEzbF5yVJ76DCA",
      token: localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
    if (config.method === 'get') {
      config.params = config.data
    }

    return config
  },
  error => {
    Toast({ message: '请求失败' })

    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
  },
  error => {
    // if (error.message.includes('timeout')) {   // 判断请求异常信息中是否含有超时timeout字符串
    //   console.log("请求超时", error)
    //   Indicator.close();
    //   return Promise.reject(error);         // reject这个错误信息
    // }
    error.message = '请求无响应'
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break

        case 401:
          error.message = '未授权，请登录'
          break

        case 403:
          error.message = '拒绝访问'
          break

        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break

        case 408:
          error.message = '请求超时'
          break

        case 411:
          error.message = '未绑定邮箱'
          break

        case 421:
          error.message = '未绑定手机'
          break

        case 500:
          error.message = '服务器内部错误'
          break

        case 501:
          error.message = '服务未实现'
          break

        case 502:
          error.message = '网关错误'
          break

        case 503:
          error.message = '服务不可用'
          break

        case 504:
          error.message = '网关超时'
          break

        case 505:
          error.message = 'HTTP版本不受支持'
          break

        default:
      }
    }
    if (
      !(error.response && error.response.status && error.response.status == 200)
    ) {
    }
    return Promise.reject(error)
  }
)

export default service

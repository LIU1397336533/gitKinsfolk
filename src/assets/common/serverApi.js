import axios from 'axios'
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api',
  timeout: 6000
});

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
// instance.defaults.timeout = 15000;
// instance.defaults.baseURL = 'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api';
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


const get = (url, data = null) => {
  return instance.get(url, data)
}
const post = (url, data = null) => {
  return instance.post(url, data)
}
export {
  post, get
}
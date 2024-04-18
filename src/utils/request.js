/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:16:33
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 11:47:21
 * @FilePath: /large-screen/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
  // baseURL: 'http://10.205.0.69:9080',
  // baseURL: '/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
// 请求拦截
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  (error) => {
    const status = error.response.status;
    switch (status) {
      case 401:
        // 用户没有权限
        break;
      case 500:
        // 服务器发生错误
        break;
      case 404:
        // Not Found
        break;
      case 504:
        // 网关超时
        break;
      case 400:
        // 请求有误
        break;
    }
    return Promise.reject(error);
  },
);
export function request(method = 'GET', url = '', params = {}) {
  return new Promise((resolve, reject) => {
    let promise;
    if (method.toUpperCase() === 'GET') {
      promise = instance({
        url,
        params,
      });
    } else if (method.toUpperCase() === 'POST') {
      promise = instance({
        method,
        url,
        data: params,
      });
    }

    promise
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:25:33
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-19 10:02:14
 * @FilePath: /large-screen/src/api/homepage.js
 * @Description: 大屏接口
 */
// 引入 request
import { request } from '@/utils/request';

// 人民币汇率api🌰
export const getRmbInfo = () => {
  const url = '/api/dataBoard/rmbExchange/query/list';
  return request('POST', url);
};
// 人民币汇率api🌰dw/model/data/query/map/list
export const getReport = (params) => {
  const url = '/api/dw/model/data/query/map/list';
  return request('POST', url, params);
};

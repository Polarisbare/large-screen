/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:25:33
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-19 11:27:28
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
// 行业分析报告
export const getReport = (params) => {
  const url = '/api/dw/model/data/query/map/list';
  return request('POST', url, params);
};
//
// 贷款市场报价利率
export const getLoan = (params) => {
  const url = '/api/financial/market/loan/market/list';
  return request('POST', url, params);
};
// 中国国债收益率
export const getTB = (params) => {
  const url = '/api/financial/market/treasury/bond/list';
  return request('POST', url, params);
};

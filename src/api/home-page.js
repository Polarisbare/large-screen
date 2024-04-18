/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:25:33
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-18 11:47:10
 * @FilePath: /large-screen/src/api/homepage.js
 * @Description: 大屏接口
 */
// 引入 request
import { request } from '@/utils/request';

// api🌰
export const getRmbInfo = () => {
  const url = '/api/dataBoard/rmbExchange/query/list';
  return request('POST', url);
};

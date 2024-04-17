/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 15:18:59
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-17 15:28:43
 * @FilePath: /large-screen/src/router/routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routes = [
  // {
  //   path: '/login',
  //   component: () => import('@/pages/login.vue'), //路由懒加载
  // },
  {
    path: '/',
    component: () => import('@/views/home.vue'),
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('@/views/notFound.vue'),
  // },
];

export default routes;

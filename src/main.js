/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:06:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-20 15:15:49
 * @FilePath: /large-screen/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import * as antIcons from '@ant-design/icons-vue';
import Antd from 'ant-design-vue';
console.log('VITE_BASEURL', import.meta.env.VITE_APP_NAME);

const app = createApp(App);
app.use(router); //注册路由
app.use(Antd);
app.mount('#app');
// 注册图标组件到全局
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
app.config.globalProperties.$antIcons = antIcons;

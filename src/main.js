/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:06:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-17 14:35:15
 * @FilePath: /large-screen/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
console.log("VITE_BASEURL", import.meta.env.VITE_APP_NAME);
createApp(App).mount("#app");

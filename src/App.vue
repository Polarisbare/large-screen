<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:06:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-20 15:13:33
 * @FilePath: /large-screen/App.vue
 * @Description: App
-->
<template>
  <a-locale-provider :locale="zhCN">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </a-locale-provider>
</template>
<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>

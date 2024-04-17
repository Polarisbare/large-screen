<!--
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-17 14:06:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-17 15:26:18
 * @FilePath: /large-screen/App.vue
 * @Description: App
-->
<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>
<script setup></script>

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

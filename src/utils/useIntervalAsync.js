/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-04-19 17:00:59
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-04-19 17:03:03
 * @FilePath: /large-screen/src/utils/useIntervalAsync.js
 * @Description:
 * 刷新方法：flush()------手动触发任务轮询
 * 取消方法：cancel()-------取消任务轮询
 * 恢复方法：recover()---------恢复任务轮询
 * 
 * 
 * 使用方法
 * const { recover } = useIntervalAsync(async () => {
      //  getList()
  }, 5000);
 */

export const useIntervalAsync = (callback, delay) => {
  const timeout = ref(null);
  const canceled = ref(false);
  const cleanup = ref();

  // 将延迟时间转换为毫秒
  // delay = toMilliseconds(delay, unit);

  const run = async () => {
    if (canceled.value) {
      return;
    }
    // 清理之前的回调函数
    if (typeof cleanup.value === 'function') {
      cleanup.value();
    }
    // 执行回调函数并获取清理函数
    cleanup.value = await Promise.resolve(callback());
    // 设置下一次任务轮询的定时器
    timeout.value = globalThis.setTimeout(run, delay);
  };

  // 初始化任务轮询
  run();

  // 刷新任务轮询，取消当前定时器，重新执行回调函数
  const flush = () => {
    timeout.value && globalThis.clearTimeout(timeout.value);
    run();
  };

  // 取消任务轮询，清理定时器和回调函数
  const cancel = () => {
    timeout.value && globalThis.clearTimeout(timeout.value);
    canceled.value = true;
    if (typeof cleanup.value === 'function') {
      cleanup.value();
    }
  };

  // 恢复任务轮询，重新启动定时器
  const recover = () => {
    canceled.value = false;
    flush();
  };

  // 在组件卸载时取消任务轮询
  onUnmounted(() => {
    cancel();
  });

  return {
    flush,
    cancel,
    recover,
  };
};

export default useIntervalAsync;

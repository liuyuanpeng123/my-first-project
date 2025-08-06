import { ref, onMounted, onUnmounted } from 'vue';

// 定义返回的时间对象类型
interface TimeObj {
  time: string;
  date: string;
  week: string;
}

export function useCurrentTime() {
  // 用于存储时间的响应式数据
  const timeObj = ref<TimeObj>({
    time: '',
    date: '',
    week: ''
  });

  // 时间格式化函数
  const formatTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const weekDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];

    timeObj.value = {
      time: `${hours}:${minutes}:${seconds}`,
      date: `${year}-${month}-${day}`,
      week: weekDay
    };
  };

  // 定时器标识
  let timer: number | null = null;

  // 组件挂载时启动定时器
  onMounted(() => {
    formatTime();
    timer = window.setInterval(formatTime, 1000);
  });

  // 组件卸载时清除定时器
  onUnmounted(() => {
    if (timer) {
      window.clearInterval(timer);
    }
  });

  // 返回时间对象
  return timeObj;
}
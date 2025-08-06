<template>
  <div class="surgery-board relative"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
    >
    <div class="scroll-container flex overflow-x-auto space-x-10 pb-5">
      <div
        v-for="(surgery, index) in roomsList()"
        :key="index"
        class="surgery-item"
        
      >
        <div class="header"
        :class="{
          'bg-yellow-100': surgery.status === '手术开始' ||  surgery.status === '入手术室',
          // 'bg-green-100': surgery.status === '入手术室',
          'bg-green-100': surgery.status === '等待',
          'bg-blue-100': surgery.status === '准备手术',
          'bg-purple-100': surgery.status === '麻醉开始',
          'bg-gray-100': surgery.status === '空闲'
        }">
          <span class="code">{{ surgery.code }}</span>
          <span class="status">{{ surgery.status }}</span>
          <span class="total">共{{ surgery.count }}台</span>
        </div>
        <div class="details" v-if="surgery.status !== '空闲'">
          <div class="detail-item d">
            <span class="s1">{{ surgery.sequence }}</span>
            <span>{{ surgery.surgeryName }}</span>
            
          </div>
          <div class="detail-item s">
            <div class="left"></div>
            <div class="right">
              <span v-if="surgery.infection">{{ surgery.infection }}</span>
            </div>
           
          </div>
          <div class="detail-item">
            <span>主刀: {{ surgery.mainSurgeon }}</span>
            <span>洗手: {{ surgery.assistantSurgeon }}</span>
          </div>
          <div class="detail-item">
            <span>麻醉: {{ surgery.anesthesiologist }}</span>
            <span>巡回: {{ surgery.circulator }}</span>
          </div>
          <div class="detail-item b" v-if="surgery.duration">
            <div class="left">
              <el-progress v-if="surgery.nowTime >= 0" :percentage="percentages(surgery)" :color="customColors" :show-text="false"/>
              <el-progress v-if="surgery.nowTime >= -10 && surgery.nowTime <0" :percentage="percentages(surgery)" color="#FEBB3B" :show-text="false"/>
              <el-progress v-if="surgery.nowTime >= -20 && surgery.nowTime < -10" :percentage="percentages(surgery)" color="#FF8C60" :show-text="false"/>
              <el-progress v-if="surgery.nowTime >= -30 && surgery.nowTime < -20" :percentage="percentages(surgery)" color="#f00" :show-text="false"/>
            </div>
            <div class="right">
              <span v-if="surgery.duration">{{ surgery.duration }}</span>
            </div>
           
          </div>
        </div>
        <div class="details" v-else>
          <div class="kongxian">
           空闲
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { ArrowLeftBold ,ArrowRightBold} from '@element-plus/icons-vue';
interface Surgery {
  code: string;
  status: string;
  count: number;
  sequence: string;
  surgeryName: string;
  infection?: string;
  mainSurgeon: string;
  assistantSurgeon: string;
  anesthesiologist: string;
  circulator: string;
  duration?: string;
  totalTime?:string;
  nowTime?:string;
}

export default defineComponent({
  name: 'SurgeryBoard',
  props:{
    surgeryList:{
      type: Object,
      required: true
    },
  },
  setup(props) {
   
      const percentages = (surgery) =>{
        const { nowTime, totalTime } = surgery;
        // 确保 total 不为 0，避免除以 0 的错误
        if (totalTime =="" || totalTime === 0) {
          return 0;
        }
        if(Number(nowTime) < 0){
          return 100
        }
        // 计算百分比并返回
        return Number(Math.round((Number(nowTime)  / Number(totalTime)) * 100)) ;
      } 
    const customColors = [
        { color: '#0098FA', percentage: 20 },
        { color: '#0098FA', percentage: 40 },
        { color: '#0098FA', percentage: 60 },
        { color: '#0098FA', percentage: 80 },
        { color: '#0098FA', percentage: 100 },
      
    ]
    
    const nowPage = ref(1)
    const totolPage = ref(0)
    const totol = ref(12)
    totolPage.value = Math.ceil(props.surgeryList.length / totol.value);
    // console.log(totolPage.value)
    let roomsList = () =>{
      totolPage.value = Math.ceil(props.surgeryList.length / totol.value);
      let start = (nowPage.value - 1) * totol.value;
      let end = (nowPage.value - 1) * totol.value + totol.value;
      return props.surgeryList.slice(start,end)
    }
    
    // 滑动状态管理
    const startX = ref(0);
    const isDragging = ref(false);
    const swipeDirection = ref('');

    // 鼠标按下事件
    const handleMouseDown = (e) => {
      isDragging.value = true;
      startX.value = e.clientX;
      swipeDirection.value = '';
    };

    // 鼠标移动事件
    const handleMouseMove = (e) => {
      if (!isDragging.value) return;
      // 可在此添加实时滑动反馈逻辑
    };

    // 鼠标释放事件
    const handleMouseUp = (e) => {
      if (!isDragging.value) return;
      
      const endX = e.clientX;
      const diffX = endX - startX.value;
      const minSwipeDistance = 30; // 最小滑动距离阈值
      
      if (diffX > minSwipeDistance) {
        swipeDirection.value = 'right';
        handleSwipeRight();
      } else if (diffX < -minSwipeDistance) {
        swipeDirection.value = 'left';
        handleSwipeLeft();
      }
      
      isDragging.value = false;
    };

    // 鼠标离开区域事件
    const handleMouseLeave = () => {
      isDragging.value = false;
    };

    // 左滑处理
    const handleSwipeLeft = () => {
      
      if(totolPage.value == nowPage.value) return
      nowPage.value++
      roomsList()
      // console.log('向左滑动');
      // 左滑业务逻辑
    };

    // 右滑处理
    const handleSwipeRight = () => {
      // console.log('向右滑动');
      if(nowPage.value == 1) return
      nowPage.value--
      roomsList()
      // 右滑业务逻辑
    };



    return {
      customColors,
      percentages,
      swipeDirection,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      handleMouseLeave,
      roomsList
    };
  }
});
</script>

<style scoped>
.surgery-board {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
   /* 核心配置：禁止文字选中 */
   user-select: none;
  /* 兼容旧版浏览器 */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
}
.scroll-container {
  padding: 0.5vw 0;
  display: flex;
  flex-flow: wrap;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
}
.surgery-item {
  /* min-width: 300px; */
  border: 0.1vw solid #ccc;
  /* padding: 0.5vw; */
  border-radius: 0.5vw;
  width: 23.2vw;
  box-shadow: 0 0 0.5vw rgba(59, 139, 243, 0.16);
  /* margin-right: 0.5vw; */
  background: #ffffff;

}
.header {
  display: flex;
  justify-content: space-around;
  margin-bottom: .3vw;
  height: 3.87vh;
  line-height: 1.87vw;
  padding: 0 0.5vw;
  background: linear-gradient(135deg, #00b0ff 0%, #e6f7ff 100%); /* 背景渐变，可调整颜色 */
  border-top-left-radius: 1vh; /* 左上角圆角 */
  border-bottom-left-radius: 1vh; /* 左下角圆角 */
  /*padding: 10px;  内边距 */
  align-items: center; /* 垂直居中 */
}
.bg-green-100{
  background: linear-gradient(135deg, #0ddfa3 0%, #daf7f0 100%); /* 背景渐变，可调整颜色 */
}
.bg-gray-100{
  background: linear-gradient(135deg, rgb(153, 153, 153) 0%, rgb(240, 240, 240) 100%); /* 背景渐变，可调整颜色 */
}
.code {
  font-weight: bold;
  font-weight: bold; /* 加粗 */
  font-size: 2.33vh; /* 字号 */
  color: white; /* 文字颜色 */
  /* background: #daf7f0; */
}
.status {
  /* color: blue; */
  font-weight: bold;
  font-size: 1vw;
  color: white;
  margin-left: 10px; /* 与代码间的间距 */
}
.total {
  color: gray;
  font-size: 0.7vw;
}
.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 10.62vh;
  padding: 0.5vw;
}
.kongxian{
  text-align: center;
  line-height: 10.62vh;
  color: #333;
  font-size: 2vw;
}
.detail-item {
  display: flex;
  gap: .5vw;
  color: #333333;
  font-size: 0.8vw;
}
.d{
  display: block;
  height: 4vh;
}
.s{
  display: flex;
}
.s .left{
  width: 85%;
}
.b{
  display: flex;
}
.b .left{
  width: 80%;
  padding-top: 0.5vh;
}
.s1{
  display: inline-block;
  width: 3vw;
}
.prev-button,
.next-button {
  width: 40px;
  height: 40px;
}
</style>
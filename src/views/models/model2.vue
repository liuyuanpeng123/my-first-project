<template>
  <div class="model-template">
    <div class="contents">
      <div class="top">
        <div class="left">
          <div class="logo"></div>
        </div>
        <div class="center">
          手术部看板中心
        </div>
        <div class="right">
          <div class="ll">
            <p>{{ timeObj.time }}</p>
          </div>
          <div class="rr">
            <p>{{ timeObj.date }}</p>
            <p>{{ timeObj.week }}</p>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="topItem">
          <div class="item">
            <el-card shadow="hover">
              <div class="card-header">
                <p class="shu"></p>
                <p class="card-header-title">术间信息</p>
              </div>
              <div class="box">
                <div class="ca">
                  <div class="imgb">
                    <div class="img"></div>
                  </div>
                  <div class="text">
                    <div class="t1">空闲</div>
                    <div class="t2">{{ShowRoomData.idle}}</div>
                  </div>
                </div>
                <div class="ca">
                  <div class="imgb">
                    <div class="img"></div>
                  </div>
                  <div class="text">
                    <div class="t1">超时</div>
                    <div class="t2">{{ShowRoomData.timeout}}</div>
                  </div>
                </div>
                <div class="ca">
                  <div class="imgb">
                    <div class="img"></div>
                  </div>
                  <div class="text">
                    <div class="t1">急诊手术</div>
                    <div class="t2">{{ShowRoomData.emergencySurgery}}</div>
                  </div>
                </div>
                <div class="ca">
                  <div class="imgb">
                    <div class="img"></div>
                  </div>
                  <div class="text">
                    <div class="t1">急诊等待</div>
                    <div class="t2">{{ShowRoomData.emergencyWaiting}}</div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="item">
            <el-card shadow="hover">
              <div class="card-header">
                <p class="shu"></p>
                <p class="card-header-title">分区信息</p>
              </div>
              <v-chart class="chart" :option="pieDate"  v-if="chartReady"/>
            </el-card>
          </div>
          <div class="item item1">
            <el-card shadow="hover">
              <div class="card-header">
                <p class="shu"></p>
                <p class="card-header-title">分级信息</p>
              </div>
              <v-chart class="chart" :option="lineDate" v-if="chartReady"/>
            </el-card>
          </div>
        </div>
        <div class="botItem">
          <SurgeryBoard :surgeryList="ShowRoomList"></SurgeryBoard>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="model-2">
import { ref ,onMounted ,onUnmounted,nextTick, reactive} from 'vue';
import { use } from 'echarts/core';
import { BarChart, LineChart, PieChart, MapChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import SurgeryBoard from '@/components/SurgeryBoard.vue';
import VChart from 'vue-echarts';
import { Surgery } from '@/types/Surgery';
import { pie21, pie22 } from '../chart/options';
import { useWindowSize } from '@/hook/useWindowSize';
import {ShowTodayOperatingCount,ShowOperatingTypeCount,ShowRoomMsg,ShowRooms} from '@/api/model2'
import { submitip} from '@/api/region';
import { useCurrentTime } from '@/hook/useCurrentTime';
// 注册ECharts组件
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  LineChart,
  PieChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  MapChart,
]);
const timeObj = useCurrentTime();
const surgeryList: Surgery[] = [
      // 填写手术信息数组
      {
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },
      {
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:25,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:5,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:5,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },{
        code: 'C-13',
        status: '手术开始',
        count: 19,
        sequence: '台次3',
        surgeryName: '腹腔镜结肠癌根治术（备肠粘连松解术、肠造术）',
        mainSurgeon: '毕铁男',
        assistantSurgeon: '洪洋莉',
        anesthesiologist: '吴丽丽',
        circulator: '杨仰',
        infection:"梅毒",
        duration: '15/30min',
        nowTime:15,
        totalTime:30,
      },
    ];
interface ShowRoomData  {
  emergencySurgery:number;
  emergencyWaiting:number;
  idle:number;
  timeout:number;
}    
const ShowRoomData = ref<ShowRoomData>({
  emergencySurgery: 0,
  emergencyWaiting: 0,
  idle: 0,
  timeout: 0
})
const nowIp = ref("")
// const submitips = async ()=>{
//   const res = await submitip()
//   nowIp.value = res.data.code
//   console.log(nowIp.value )
// }
// submitips()
const ShowRoomList = ref<Surgery[]>([])
const { width, height } = useWindowSize();
const  lineDate = ref(pie22)
const  pieDate = ref(pie21)
const timer = ref<number | null>(null);
const getData = async () => {
  try {
    const nowip =  await submitip()
    nowIp.value = nowip.data.code
    let params = {
      ip:nowIp.value
    }
    const res = await ShowTodayOperatingCount(params)
    pieDate.value.series[0].data = res.data.data
    pieDate.value.title.text = res.data.data.reduce((sum, item) => sum + item.value, 0);
    const res1 = await ShowOperatingTypeCount(params)
    lineDate.value.xAxis.data = res1.data.data.xAxis.data
    lineDate.value.series = res1.data.data.series

    // console.log(lineDate.value.xAxis)

    // console.log(width,height)
    if(width.value>1920){
      pieDate.value.title.textStyle.fontSize = 80
      pieDate.value.title.subtextStyle.fontSize = 34
      pieDate.value.series[0].label.fontSize = 34

      lineDate.value.series[0].label.fontSize = 34
      lineDate.value.series[1].label.fontSize = 34
      lineDate.value.legend.textStyle.fontSize = 34
      
      lineDate.value.xAxis.axisLabel.fontSize = 34
      lineDate.value.yAxis.axisLabel.fontSize = 34
      
      
      // console.log(lineDate.value.series[1])
    }
    const res3 = await ShowRoomMsg(params)
    ShowRoomData.value = res3.data.data

    const res4 = await ShowRooms(params)
    ShowRoomList.value = res4.data.data
  } catch (error) {
    console.error('获取数据失败:', error);
  }
};

// 启动定时器的方法
// const startTimer = () => {
//   timer.value = window.setInterval(async () => {
//     const data = await getData();
//     // console.log('定时获取数据:', data);
//   }, 5000);
// };

// // 先执行一次数据获取，成功后启动定时器
// getData().then(() => {
//   startTimer();
// });

const chartReady = ref(false);
onMounted(() => {
  getData()
  // 每隔5秒执行一次（5000毫秒）
  timer.value = window.setInterval(() => {
    getData();
  }, 10000);
  // 等待DOM渲染完成
  nextTick(() => {
    // 延迟设置为true，确保容器高度已计算
    setTimeout(() => {
      chartReady.value = true;
    }, 200);
  });
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});

</script>

<style scoped>
/* 全局样式 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 卡片内容样式 */
.card-body {
  display: flex;
  align-items: center;
  height: 6vh;
  padding: 0;
}

/* 表格样式调整 */
.el-table {
  font-size: 1vw;
}

.el-table th {
  padding: 0.8vh 0;
}

.el-table td {
  padding: 1vh 0;
}

/* 进度条样式 */
.el-progress-circle {
  width: 8vw !important;
  height: 8vw !important;
}

.el-progress__text {
  font-size: 1vw !important;
}
</style>

<style scoped lang="scss">
.model-template {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #F3FBFF;
}

.contents {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // padding: 1vw;
  box-sizing: border-box;
}

.top {
  height: 10vh;
  display: flex;
  background: url('../../assets/img/topback.png') center;
  background-size: 100% 100%;
  border-radius: 0.5vw;
  margin-bottom: 1vh;
  
  .left {
    width: 25vw;
    display: flex;
    align-items: center;
    padding-left: 2vw;
    
    .logo {
      width: 6vw;
      height: 6vh;
      background: url('../../assets/img/logo.png') no-repeat center;
      background-size: contain;
    }
  }
  
  .center {
    flex: 1;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 2vw;
    line-height: 10vh;
  }
  
  .right {
    width: 25vw;
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    color: #ffffff;
    .ll{
      font-size: 28px;
      padding-top: 10px;
      margin-right: 20px;
    }
    .rr{
      font-size: 12px;
      padding-top: 10px;
    }
  }
}

.main {
  height: calc(90vh - 1vw);
  
  .topItem {
    display: flex;
    height: 30vh;
    gap: 20px;
    margin-bottom: 1vh;
    width: 98vw;
    padding: 0 30px;
    .item {
      // flex: 1;
      width: 450px;
      height: 100%;
      border-radius: 0.5vw;
      box-shadow: 0 0 0.5vw rgba(59, 139, 243, 0.16);
      
      .el-card {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      
      .box {
        display: flex;
        flex-flow: wrap;
        flex: 1;
        align-items: center;
        justify-content: center;
        
        .ca {
          width: 50%;
          height: 40%;
          display: flex;
          align-items: center;
          padding: 0 1vw;
          box-sizing: border-box;
          
          .imgb {
            width: 4vw;
            height: 4vw;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .img {
              width: 3vw;
              height: 3vw;
              background: url('../../assets/img/1056.png') center;
              background-size: 100% 100%;
            }
          }
          
          .text {
            padding-left: 1vw;
            width: 4.3vw;
            .t1 {
              height: 2vh;
              color: #999999;
              font-size: .9vw;
            }
            
            .t2 {
              height: 3vh;
              line-height: 3vh;
              font-weight: 700;
              color: #333333;
              font-size: 1.8vw;
            }
          }
        }
      }
    }
    .item1{
      width: 920px;
    }
  }
  
  .botItem {
    display: flex;
    // height: calc(60vh - 2vh);
    gap: 20px;
    // width: 98vw;
    padding: 0 30px;
    
    .list {
      width: 24vw;
      height: 100%;
      background: linear-gradient(180deg, #fce3bc, #ffffff 11%);
      border-radius: 0.5vw;
      box-shadow: 0 0 0.5vw rgba(59, 139, 243, 0.16);
      
      .el-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        
        .el-table {
          flex: 1;
          overflow-y: auto;
        }
      }
    }
    
    .item2 {
      width: 24vw;
      display: flex;
      flex-direction: column;
      gap: 1vh;
      
      .item {
        flex: 1;
        border-radius: 0.5vw;
        box-shadow: 0 0 0.5vw rgba(59, 139, 243, 0.16);
        
        .el-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      }
      
      .item22 {
        .charts {
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
          padding: 1vw;
          
          .left {
            width: 50%;
            
            .l1 {
              width: 100%;
              height: 3vh;
              background: #f3fbff;
              line-height: 3vh;
              margin-bottom: 1vh;
              padding-left: 0.5vw;
              font-size: 1vw;
              border-radius: 0.3vw;
            }
          }
        }
      }
    }
  }
  .bottom{
    height: 10px;
    width: 100%;
    background: #70bbf8;
    position: fixed;
    bottom: 0;
  }
}

/* 卡片头部样式 */
.card-header {
  padding: 1vh 1vw;
  display: flex;
  align-items: center;
  
  .shu {
    width: 0.3vw;
    height: 1.8vh;
    background: #3b8bf3;
    margin-right: 0.5vw;
    border-radius: 0.15vw;
  }
  
  .card-header-title {
    font-weight: bold;
    font-size: 1.2vw;
    color: #333;
    margin: 0;
  }
}

/* 图表样式 */
.chart {
  width: 100%;
  height: calc(100% - 5vh);
  // height: 210px;
  min-height: 23vh;
}

/* 滚动条样式优化 */
::-webkit-scrollbar {
  width: 0.3vw;
  height: 0.3vw;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 0.15vw;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
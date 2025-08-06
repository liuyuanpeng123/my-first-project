<template>
  <div class="model-template">
    <div class="contents" style="width: 1920px; height: 1080px;overflow: hidden;">
      <div class="top">
        <div class="left">
          <div class="logo"></div>
        </div>
        <div class="center">
          智慧手术运营管理系统
        </div>
        <div class="right">

        </div>
      </div>
      <div class="main">
        <div class="topItem">
          <div class="item">
            <el-card shadow="hover">
                    <div class="card-header">
                        <p class="shu"></p>
                        <p class="card-header-title">来院方式</p>
                    </div>
                    <v-chart class="chart" :option="pie1" />
                </el-card>
          </div>
          <div class="item">
            <el-card shadow="hover">
                    <div class="card-header">
                      <p class="shu"></p>
                        <p class="card-header-title">分区信息</p>
                    </div>
                    <v-chart class="chart" :option="pie2" />
                </el-card>
          </div>
          <div class="item">
            <el-card shadow="hover">
                    <div class="card-header">
                      <p class="shu"></p>
                        <p class="card-header-title">分级信息</p>
                    </div>
                    <v-chart class="chart" :option="pie3" />
                </el-card>
          </div>
          <div class="item">
            <el-card shadow="hover">
                    <div class="card-header">
                      <p class="shu"></p>
                        <p class="card-header-title">病种类型</p>
                    </div>
                    <v-chart class="chart" :option="pie4" />
                </el-card>
          </div>
        </div>
        <div class="botItem">
          <div class="list">
            <el-card shadow="hover">
                    <div class="card-header">
                      <p class="shu"></p>
                        <p class="card-header-title">危机值提醒</p>
                    </div>
                    <el-table :data="tableData" stripe >
                      <el-table-column prop="name" label="患者信息"  />
                      <el-table-column prop="info" label="危急值内容"  />
                      <el-table-column prop="date" label="提醒时间" />
                    </el-table>
                </el-card>
          </div>
          <div class="item2">
            <div class="item">
              <el-card shadow="hover">
                      <div class="card-header">
                        <p class="shu"></p>
                          <p class="card-header-title">出室信息</p>
                      </div>
                      <v-chart class="chart" :option="pie5" />
                  </el-card>
            </div>
            <div class="item item22">
              <el-card shadow="hover">
                      <div class="card-header">
                        <p class="shu"></p>
                          <p class="card-header-title">分诊人数统计(月报)</p>
                      </div>
                      <div class="charts">
                        <div class="left">
                          <div class="l1">本月分诊 1067</div>
                          <div class="l1">同期环比 ↓20.1%</div>
                        </div>
                        <el-progress type="circle" stroke-width="15" :percentage="20.1" />
                        <!-- <v-chart class="chart" :option="pie10" /> -->
                      </div>
                  </el-card>
            </div>
            
          </div>
          <div class="item2">
            <div class="item">
              <el-card shadow="hover">
                      <div class="card-header">
                        <p class="shu"></p>
                          <p class="card-header-title">滞留时间(月报)</p>
                      </div>
                      <v-chart class="chart" :option="pie6" />
                  </el-card>
            </div>
            <div class="item item22">
              <el-card shadow="hover">
                      <div class="card-header">
                        <p class="shu"></p>
                          <p class="card-header-title">专科收入院统计(月报)</p>
                      </div>
                      <div class="charts">
                        <div class="left">
                          <div class="l1">本月分诊 109</div>
                          <div class="l1">同期环比 ↓34.7%</div>
                        </div>
                        <!-- <v-chart class="chart" :option="pie10" /> -->
                        <el-progress type="circle" stroke-width="15" :percentage="34.7" />
                      </div>
                      
                  </el-card>
            </div>
            
          </div>
          <div class="list">
              <el-card shadow="hover">
                      <div class="card-header">
                        <p class="shu"></p>
                          <p class="card-header-title">今日会诊</p>
                      </div>
                      <el-table :data="tableData2" stripe style="width: 100%">
                        <el-table-column prop="status" label="会诊状态" width="80" />
                        <el-table-column prop="name" label="患者信息" width="100" />
                        <el-table-column prop="info" label="会诊科室" width="145" />
                        <el-table-column prop="date" label="申请时间" />
                      </el-table>
                  </el-card>
            </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>
<script lang="ts" setup name="model-1">
import { ref, onMounted } from 'vue';


import { use, registerMap } from 'echarts/core';
import { BarChart, LineChart, PieChart, MapChart } from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { dashOpt1, dashOpt2, mapOptions,pie1,pie2,pie3,pie4,pie5,pie6,pie10 } from '../chart/options';
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
const tableData = [
    {
        name: '抢34 过*兵',
        info: '表格内容七八九',
        date: '15:56:07'
    },
    {
        name: '妇2 赵*全',
        info: '表格内容八九九',
        date: '15:25:11'
    },
    {
        name: '抢21 陈*',
        info: '表格内容七八九',
        date: '15:02:58'
    },
    {
        name: '抢11 谢*艳',
        info: '表格内容七八九',
        date: '14:17:52'
    },
    {
        name: '抢22 何*国',
        info: '表格内容八九九',
        date: '13:50:16'
    },
    {
        name: '抢27 许*林',
        info: '表格内容七八九',
        date: '13:48:32'
    },
    {
        name: '抢27 许*林',
        info: '表格内容八九九',
        date: '13:48:32'
    },
    {
        name: '抢13 宋*东',
        info: '表格内容七八九',
        date: '13:15:43'
    },
    {
        name: '抢12 张*宁',
        info: '表格内容八九九',
        date: '13:04:37'
    }
];
const tableData2 = [
    {
        status:"待会诊",
        name: '抢34 过*兵',
        info: '表格内容七八九',
        date: '15:56:07'
    },
    {
      status:"待会诊",
        name: '妇2 赵*全',
        info: '表格内容八九九',
        date: '15:25:11'
    },
    {
      status:"待会诊",
        name: '抢21 陈*',
        info: '表格内容七八九',
        date: '15:02:58'
    },
    {
      status:"待会诊",
        name: '抢11 谢*艳',
        info: '表格内容七八九',
        date: '14:17:52'
    },
    {
        name: '抢22 何*国',
        info: '表格内容八九九',
        date: '13:50:16'
    },
    {
      status:"待会诊",
        name: '抢27 许*林',
        info: '表格内容七八九',
        date: '13:48:32'
    },
    {
      status:"待会诊",
        name: '抢27 许*林',
        info: '表格内容八九九',
        date: '13:48:32'
    },
    {
        name: '抢13 宋*东',
        info: '表格内容七八九',
        date: '13:15:43'
    },
    {
      status:"待会诊",
        name: '抢12 张*宁',
        info: '表格内容八九九',
        date: '13:04:37'
    }
];
</script>

<style>
.card-body {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0;
}
</style>
<style scoped lang="scss">
.model-template{
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-between;
}
.contents{
  position: relative;
  .top{
    height: 113px;
    display: flex;
    background: url('../../assets/img/topback.png') center;
    background-size: 100% 100;
    .left{
      width: 750px;
    }
    .center{
      width: 420px;
      text-align: center;
      color: #ffffff;
      font-weight: 700;
      font-size: 38px;
      line-height: 113px;
    }
    .right{
      width: 750px;
    }
  }
  .main{
    .topItem{
      display: flex;
      .item{
        width: 450px;
        // height: 340px;
        // background: #ffffff;
        margin-left: 23px;
        border-radius: 10px;
        box-shadow: 1px 1px 12px 0px rgba(59,139,243,0.16);
       
      }
    }
    .botItem{
      display: flex;
      margin-top: 20px;
      .list{
        width: 450px;
        height: 574px;
        background: linear-gradient(180deg,#fce3bc, #ffffff 11%);
        border-radius: 10px;
        box-shadow: 1px 1px 12px 0px rgba(59,139,243,0.16); 
        margin-left: 23px;
        .el-card{
          height: 574px;
        }
      }
      .item2{
        width: 450px;
        margin-left: 23px;
        border-radius: 10px;
        box-shadow: 1px 1px 12px 0px rgba(59,139,243,0.16);
        .item{
          margin-bottom: 20px;

          
        }
        .item22{
          margin-bottom:0;
          .chart {
              width: 140px;
              height: 108px;
          }
          .charts{
            display: flex;
            justify-content: space-around;
            .left{
              width: 180px;
              .l1{
                width: 200px;
                height: 42px;
                background: #f3fbff;
                line-height: 42px;
                margin-bottom: 10px;
                padding-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}
.card-content {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
    padding: 0 20px;
}

.card-num {
    font-size: 30px;
}


.card-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}



.chart {
    width: 100%;
    height: 260px;
}

.card-header {
    padding-left: 10px;
    margin-bottom: 20px;
    display: flex;
    // padding: 28px 0 0 28px;
}

.card-header-title {
    font-weight: bold;
    margin-bottom: 5px;
    height: 26px;
    font-size: 20px;

}
.shu{
  width: 5px;
  height: 26px;
  background: #3b8bf3;
  margin-right: 10px;
}

.card-header-desc {
    font-size: 14px;
    color: #999;
}

.timeline-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #000;
}

.timeline-time,
.timeline-desc {
    font-size: 12px;
    color: #787878;
}

.rank-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.rank-item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f2f2f2;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
}

.rank-item-content {
    flex: 1;
}

.rank-item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #343434;
    margin-bottom: 10px;
}

.rank-item-desc {
    font-size: 14px;
    color: #999;
}
.map-chart {
    width: 100%;
    height: 350px;
}
</style>

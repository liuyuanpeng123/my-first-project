import { graphic } from 'echarts/core';
export const barOptions = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        },
        {
            data: [180, 230, 190, 120, 110, 230, 235],
            type: 'bar',
        },
    ],
};

export const lineOptions = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
};

export const pieOptions = {
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};

export const wordOptions = {
    series: [
        {
            type: 'wordCloud',
            rotationRange: [0, 0],
            autoSize: {
                enable: true,
                minSize: 14,
            },
            textStyle: {
                fontFamily: '微软雅黑,sans-serif',
                color: function () {
                    return (
                        'rgb(' +
                        [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                        ].join(',') +
                        ')'
                    );
                },
            },
            data: [
                {
                    name: 'Vue',
                    value: 10000,
                },
                {
                    name: 'React',
                    value: 9000,
                },
                {
                    name: '图表',
                    value: 4000,
                },
                {
                    name: '产品',
                    value: 7000,
                },
                {
                    name: 'vue-manage-system',
                    value: 2000,
                },
                {
                    name: 'element-plus',
                    value: 6000,
                },
                {
                    name: '管理系统',
                    value: 5000,
                },
                {
                    name: '前端',
                    value: 4000,
                },
                {
                    name: '测试',
                    value: 3000,
                },
                {
                    name: '后端',
                    value: 8000,
                },
                {
                    name: '软件开发',
                    value: 6000,
                },
                {
                    name: '程序员',
                    value: 4000,
                },
            ],
        },
    ],
};

export const ringOptions = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },

    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
        },
    ],
};

export const dashOpt1 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    grid: {
        top: '2%',
        left: '2%',
        right: '3%',
        bottom: '2%',
        containLabel: true,
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            type: 'line',
            areaStyle: {
                color: new graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 150, 136,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 150, 136,0.2)',
                    },
                ]),
            },
            smooth: true,
            data: [120, 132, 301, 134, 90, 230, 210],
        },
        {
            type: 'line',
            smooth: true,
            data: [220, 122, 191, 234, 190, 130, 310],
        },
    ],
};

export const dashOpt2 = {
    legend: {
        bottom: '1%',
        left: 'center',
    },
    color: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 1048, name: '数码' },
                { value: 735, name: '食品' },
                { value: 580, name: '母婴' },
                { value: 484, name: '家电' },
                { value: 300, name: '运动' },
            ],
        },
    ],
};

export const pie1 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 144, name: '自行入院' },
                { value: 6, name: '救护车送入' },
                { value: 15, name: '其他方式' }
            ],
        },
    ],
    title: {
        text: '165',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};

export const pie2 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 127, name: '绿区' },
                { value: 6, name: '红区' },
                { value: 32, name: '黄区' }
            ],
        },
    ],
    title: {
        text: '165',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};

export const pie3 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 5, name: 'Ⅰ级' },
                { value: 30, name: 'Ⅱ级' },
                { value: 20, name: 'Ⅲ级' },
                { value: 110, name: 'Ⅳ级' }
            ],
        },
    ],
    title: {
        text: '165',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};
export const pie4 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 17, name: '胸痛' },
                { value: 6, name: '卒中' },
                { value: 12, name: '创伤' },
                { value: 130, name: '普通' }
            ],
        },
    ],
    title: {
        text: '165',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};
export const pie5 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 1, name: '其他' },
                { value: 11, name: '回家' },
                { value: 5, name: '住院' }
            ],
        },
    ],
    title: {
        text: '17',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};
export const pie6 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 5, name: '24-48h' },
                { value: 5, name: '48-72h' },
                { value: 241, name: '0-24h' }
            ],
        },
    ],
    title: {
        text: '251',
        subtext: '总数',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 16
        }
    }
};
export let pie21 = {
    legend: {
        show: false,
        bottom: '1%',
        left: 'center',
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: true, // 显示文字
                fontSize: 14, // 文字大小（可根据需要调整）
                color: '#333', // 文字颜色
            },
            data: [
                { value: 22, name: '进行中' },
                { value: 34, name: '已完成' },
                { value: 148, name: '未完成' }
            ],
        },
    ],
    title: {
        text: '2044',
        subtext: '今日总台(例)',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 14
        }
    }
};
export let pie22 = {
        legend: {
            data: ['手术', '急诊手术'], // 图例数据，与series中的name对应
            top: 0, // 图例距离顶部的距离
            left: 'right', // 图例水平居中显示
            textStyle: {
                fontSize: 14, // 图例文字大小
                color: '#999' // 图例文字颜色
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: 16, // Y轴字体大小
                color: '#999', // 可选：字体颜色
              },
        },
        xAxis: {
            axisLabel: {
                fontSize: 14, // X轴字体大小（默认12）
                color: '#999', // 可选：字体颜色
              },
            data: ['06-27', '06-28', '06-29', '06-30', '07-01', '07-02', '07-03']
            
        },
        series: [
            {
                name: '手术',
                type: 'line',
                data: [216, 57, 46, 224, 210, 251, 298],
                itemStyle: {
                    color: 'blue'
                },
                label: {
                    show: true, // 显示文字
                    fontSize: 14, // 文字大小（可根据需要调整）
                    color: '#999', // 文字颜色
                    position: 'top',
                    offset: [5, 0] // 向右偏移5px
                  },
            },
            {
                name: '急诊手术',
                type: 'line',
                data: [20, 15, 17, 5, 57, 62, 16],
                itemStyle: {
                    color: 'orange'
                },
                label: {
                    show: true, // 显示文字
                    fontSize: 14, // 文字大小（可根据需要调整）
                    color: '#999', // 文字颜色
                    position: 'left',
                    offset: [-5, 0] // 向左偏移5px
                  },
            }
        ]
    
}
export const pie10 = {
    
    eries: [
        {
            name: '周环比',
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
                show: false,
                formatter: function (params) {
                    return `<div style="text-align:center">
                        <span style="font-size:14px;display:block;">↓${params.value}%</span>
                        <span style="font-size:12px;color:#666;">${params.name}</span>
                    </div>`;
                }
            },
            data: [
                {value: 34.7, name: '周环比'}
            ]
        }
    ]
};

export const horizontalBarConfig = {
    // 标题（可自定义）
    title: {
      text: '',
      left: 'center',
      top: 'top',
      textStyle: { fontSize: 18 }
    },
    // 鼠标悬浮提示
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}: {c}%' // 显示「日期 + 百分比」
    },
    // Y轴（日期，类目轴）
    yAxis: {
      type: 'category',
      data: ['07-03', '07-02', '07-01', '06-30'], // 日期顺序与图片一致
      axisLabel: { color: '#666' },
      axisLine: { lineStyle: { color: '#ccc' } }
    },
    // X轴（百分比数值，数值轴）
    xAxis: {
      type: 'value',
      name: '',
      show:false,
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}%' // 显示百分比符号
      },
      axisLine: { lineStyle: { color: '#ccc' } },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    // 系列（横向柱状图数据）
    series: [
      {
        name: '百分比',
        type: 'bar',
        data: [66.67, 35.14, 44.12, 41.67],
        barWidth: '40%', // 柱子宽度（横向为高度）
        itemStyle: {
          // 渐变颜色（可选，可替换为单色）
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#5b9bd5' // 左侧颜色
            }, {
              offset: 1, color: '#8cc0e8' // 右侧颜色
            }]
          },
          borderRadius: [0, 6, 6, 0] // 右侧圆角
        },
        // 柱子右侧显示数值
        label: {
          show: true,
          position: 'right', // 横向柱子的数值显示在右侧
          color: '#333',
          formatter: '{c}%'
        }
      }
    ],
    // 图表内边距（避免内容被截断）
    grid: {
      left: '15%', // 左侧留空，防止日期被截断
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  export const verticalBarConfig = {
    title: {
      text: '',
      left: 'center',
      top: 'top',
      textStyle: { fontSize: 18 }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}: {c}' // 显示「日期 + 数值」
    },
    // X轴（类目轴：日期，横向排列）
    xAxis: {
      type: 'category',
      data: ['06-29', '06-30', '07-01', '07-02', '07-03'], // 日期顺序从左到右
      axisLabel: { color: '#666', fontSize: 12 },
      axisLine: { lineStyle: { color: '#ccc' } }
    },
    // Y轴（数值轴：范围0-100）
    yAxis: {
      type: 'value',
      name: '',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value}%' // 显示百分比符号
      },
      axisLine: { lineStyle: { color: '#ccc' } },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [
      {
        name: '数值',
        type: 'bar',
        data: [80.95, 89.9, 75.2, 97.24, 23.8], // 与日期一一对应
        barWidth: '30%', // 柱子宽度（竖向为宽度）
        itemStyle: {
          // 蓝色渐变（与横向图风格统一）
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#4895ef' // 顶部颜色
            }, {
              offset: 1, color: '#9bc9ff' // 底部颜色
            }]
          },
          borderRadius: [6, 6, 0, 0] // 顶部圆角
        },
        // 柱子顶部显示数值
        label: {
          show: true,
          position: 'top', // 竖向柱子的数值显示在顶部
          color: '#333',
          fontSize: 12,
          formatter: '{c}'
        }
      }
    ],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '20%', // 底部留空更多，避免日期文字重叠
      top: '20%'
    }
  };

  export const shuqianConfig = {
    // 标题（可自定义）
    title: {
      text: '',
      left: 'center',
      top: 'top',
      textStyle: { fontSize: 16 }
    },
    // 鼠标悬浮提示
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: '{b}: {c}' // 显示「状态 + 数值」
    },
    // Y轴（类目轴：显示状态名称）
    yAxis: {
      type: 'category',
      data: ['总数', '待入手术室', '术前待手术'], // 与图片顺序一致
      axisLabel: { color: '#666', fontSize: 12 },
      axisLine: { lineStyle: { color: '#ccc' } },
      inverse: true // 反转Y轴顺序（顶部为“总数”，底部为“术前待手术”）
    },
    // X轴（数值轴：显示数量）
    xAxis: {
      type: 'value',
      show:false,
      name: '',
      axisLabel: { color: '#666', fontSize: 12 },
      axisLine: { lineStyle: { color: '#ccc' } },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    // 系列（横向柱状图数据）
    series: [
      {
        name: '',
        type: 'bar',
        data: [154, 146, 8], // 与状态一一对应（总数、待入手术室、术前待手术）
        barWidth: '40%', // 柱子宽度（横向为高度）
        itemStyle: {
          // 浅蓝色渐变（与图片风格一致）
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: '#9bcbf5' // 左侧颜色
            }, {
              offset: 1, color: '#3897ec' // 右侧颜色
            }]
          },
          borderRadius: [0, 6, 6, 0] // 右侧圆角
        },
        // 柱子右侧显示数值
        label: {
          show: true,
          position: 'right', // 横向柱子的数值显示在右侧
          color: '#333',
          fontSize: 12,
          formatter: '{c}' // 仅显示数值
        }
      }
    ],
    // 图表内边距（避免内容被截断）
    grid: {
      left: '15%', // 左侧留空，防止状态名称被截断
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };
export const mapOptions = {
    tooltip: {
        trigger: 'item',
    },
    geo: {
        map: 'china',
        roam: false,
        emphasis: {
            label: {
                show: false,
            },
        },
    },
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        realtime: false,
        calculable: false,
        inRange: {
            color: ['#d2e0f5', '#71A9FF'],
        },
    },
    series: [
        {
            geoIndex: 0,
            name: '地域分布',
            type: 'map',
            coordinateSystem: 'geo',
            map: 'china',
            data: [
                { name: '北京', value: 100 },
                { name: '上海', value: 100 },
                { name: '广东', value: 100 },
                { name: '浙江', value: 90 },
                { name: '江西', value: 80 },
                { name: '山东', value: 70 },
                { name: '广西', value: 60 },
                { name: '河南', value: 50 },
                { name: '河南', value: 40 },
                { name: '青海', value: 70 },
                { name: '河南', value: 30 },
                { name: '黑龙江', value: 20 },
                { name: '新疆', value: 20 },
                { name: '云南', value: 20 },
                { name: '甘肃', value: 20 },
            ],
        },
    ],
};

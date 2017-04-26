/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';

var Chart = require('../src/index');

require('../src/echarts/chart/bar');

require('../src/echarts/component/title');
require('../src/echarts/component/tooltip');
require('../src/echarts/component/legend');

var chart = new Chart('#main');

chart.render({
    title: {
        text: '一周网站访问情况'
    },
    color: [
        '#3398DB',
        '#db625a'
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '间接访问'],
        right: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }, {
            name: '间接访问',
            type: 'bar',
            barWidth: '30%',
            data: [210, 152, 20, 134, 130, 230, 420]
        }
    ]
});



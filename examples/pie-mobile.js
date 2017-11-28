/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';

var Chart = require('../src/index');

require('../src/echarts/chart/pie');

// require('../src/echarts/component/title');
// require('../src/echarts/component/tooltip');
// require('../src/echarts/component/legend');

var chart = new Chart('#main');

chart.render({
    color: [
        '#ffca30',
        '#7e88ea',
        '#f25c81',
        '#f7a35b',
        '#96ceff',
        '#1ae7c8'
    ],
    series: [
        {
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            data: [
                {value: 15, name: '收银通预约'},
                {value: 2, name: '公务卡预约'},
                {value: 80, name: '贷款预约'},
                {value: 41, name: '大额提现预约'},
                {value: 29, name: 'ETC预约'},
                {value: 15, name: 'POS收单预约'}
            ],
            label: {
                normal: {
                    // 模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
                    formatter: "{b}{c}次"
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 5,
                    smooth: 0
                }
            }
        }
    ]
});



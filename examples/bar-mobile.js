/**
 * 文件描述
 * @author ydr.me
 * @create 2016-06-27 17:34
 */


'use strict';

var Chart = require('../src/index');

require('../src/echarts/chart/bar');

// require('../src/echarts/component/title');
// require('../src/echarts/component/tooltip');
// require('../src/echarts/component/legend');

var chart = new Chart('#main');

chart.render({
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        top: 20,
        containLabel: true
    },
    yAxis: [
        {
            type: 'category',
            data: ['收银通预约', '公务卡预约', '贷款预约', '大额提现预约', 'ETC预约', 'POS收单预约']
        }
    ],
    xAxis: [
        {
            type: 'value',
            max: function (value) {
                // 被除尽，防止文字越界，再加 50
                var remainder = value.max % 100 === 0 ? 50 : 0;
                return Math.ceil(value.max / 100) * 100 + remainder;
            }
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: 18,
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#ffca30'
                        }
                    }
                },
                {
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#7e88ea'
                        }
                    }
                },
                {
                    value: 80,
                    itemStyle: {
                        normal: {
                            color: '#f25c81'
                        }
                    }
                },
                {
                    value: 41,
                    itemStyle: {
                        normal: {
                            color: '#f7a35b'
                        }
                    }
                },
                {
                    value: 19,
                    itemStyle: {
                        normal: {
                            color: '#96ceff'
                        }
                    }
                },
                {
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: '#1ae7c8'
                        }
                    }
                }
            ],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    // 模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
                    formatter: "{b}{c}次"
                }
            }
        }
    ]
});



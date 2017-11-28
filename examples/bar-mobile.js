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
var colors = [
    '#ffca30',
    '#7e88ea',
    '#f25c81',
    '#f7a35b',
    '#96ceff',
    '#1ae7c8'
];
var categories = ['收银通预约', '公务卡预约', '贷款预约', '大额提现预约', 'ETC预约', 'POS收单预约'];

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
            data: [
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[0]
                    }
                },
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[1]
                    }
                },
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[2]
                    }
                },
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[3]
                    }
                },
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[4]
                    }
                },
                {
                    value: '●',
                    textStyle: {
                        width: 14,
                        height: 14,
                        borderRadius: 14,
                        color: colors[5]
                    }
                }
            ]
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
                            color: colors[0]
                        }
                    }
                },
                {
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: colors[1]
                        }
                    }
                },
                {
                    value: 80,
                    itemStyle: {
                        normal: {
                            color: colors[2]
                        }
                    }
                },
                {
                    value: 41,
                    itemStyle: {
                        normal: {
                            color: colors[3]
                        }
                    }
                },
                {
                    value: 19,
                    itemStyle: {
                        normal: {
                            color: colors[4]
                        }
                    }
                },
                {
                    value: 15,
                    itemStyle: {
                        normal: {
                            color: colors[5]
                        }
                    }
                }
            ],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    // 模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
                    // formatter: '{c}次'
                    formatter: function (meta) {
                        var category = categories[meta.dataIndex];
                        return category + meta.value + '次';
                    }
                }
            }
        }
    ]
});



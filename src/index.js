/**
 * blear.ui.chart
 * @author ydr.me
 * @create 2017年04月26日11:33:15
 */

'use strict';

var UI = require('blear.ui');
var selector = require('blear.core.selector');

var echarts = require('./echarts/echarts');

var Chart = UI.extend({
    constructor: function (el) {
        el = selector.query(el)[0];
        this[_echarts] = echarts.init(el);
    },

    render: function (options) {
        this[_echarts].setOption(options, true);
        return this;
    },

    decorate: function (options) {
        this[_echarts].setOption(options, false);
        return this;
    },

    destroy: function () {
        this[_echarts].clear();
        this[_echarts] = null;
    }
});
var sole = Chart.sole;
var _echarts = sole();

/**
 * 注册地图
 * @param area
 * @param desc
 */
Chart.map = function (area, desc) {
    echarts.registerMap(area, desc);
};

module.exports = Chart;

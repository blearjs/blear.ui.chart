/**
 * blear.ui.chart
 * @ref http://echarts.baidu.com
 * @author ydr.me
 * @create 2017年04月26日11:33:15
 * @update 2018年04月25日18:38:13
 */

'use strict';

var UI = require('blear.ui');
var selector = require('blear.core.selector');

var echarts = require('./echarts/echarts');

var Chart = UI.extend({
    constructor: function (el) {
        var the = this;

        Chart.parent(the);
        el = selector.query(el)[0];
        the[_echarts] = echarts.init(el);
        the[_initEvents]();
    },

    /**
     * 渲染
     * @param options
     * @returns {Chart}
     */
    render: function (options) {
        this[_echarts].setOption(options, true);
        return this;
    },

    /**
     * 装饰
     * @param options
     * @returns {Chart}
     */
    decorate: function (options) {
        this[_echarts].setOption(options, false);
        return this;
    },

    /**
     * 销毁实例
     */
    destroy: function () {
        var the = this;
        the[_echarts].clear();
        the[_echarts] = null;
        Chart.invoke('destroy', the);
    }
});
var sole = Chart.sole;
var _echarts = sole();
var _pipeEvent = sole();
var _initEvents = sole();
var prop = Chart.prototype;

prop[_pipeEvent] = function (type) {
    var the = this;

    the[_echarts].on(type.toLowerCase(), function (ev) {
        ev.type = type;
        the.emit(type, ev);
    });
};

prop[_initEvents] = function () {
    var the = this;

    // @see http://echarts.baidu.com/api.html#events

    // 鼠标单击
    // 参数0
    // {
    //     // 当前点击的图形元素所属的组件名称，
    //     // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    //     componentType: string,
    //     // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    //     seriesType: string,
    //     // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    //     seriesIndex: number,
    //     // 系列名称。当 componentType 为 'series' 时有意义。
    //     seriesName: string,
    //     // 数据名，类目名
    //     name: string,
    //     // 数据在传入的 data 数组中的 index
    //     dataIndex: number,
    //     // 传入的原始数据项
    //     data: Object,
    //     // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    //     // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    //     // 其他大部分图表中只有一种 data，dataType 无意义。
    //     dataType: string,
    //     // 传入的数据值
    //     value: number|Array
    //     // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    //     color: string
    // }
    the[_pipeEvent]('click');
    the[_pipeEvent]('dblclick');
    the[_pipeEvent]('mousedown');
    the[_pipeEvent]('mouseup');
    the[_pipeEvent]('mouseover');
    the[_pipeEvent]('mouseout');
    the[_pipeEvent]('globalout');
    the[_pipeEvent]('contextmenu');

    // 图例组件用户切换图例开关会触发该事件。
    // {
    //     type: 'legendselectchanged',
    //     // 切换的图例名称
    //     name: string
    //     // 所有图例的选中状态表
    //     selected: Object
    // }
    the[_pipeEvent]('legendSelectChanged');
    the[_pipeEvent]('legendSelected');
    the[_pipeEvent]('legendUnselected');
    the[_pipeEvent]('legendScroll');

    // 数据区域缩放后的事件。
    the[_pipeEvent]('dataZoom');

    // selectDataRange 视觉映射组件中，range 值改变后触发的事件。
    the[_pipeEvent]('dataRangeSelected');
    the[_pipeEvent]('dataViewChanged');

    // 饼图扇形切换选中状态的事件。
    the[_pipeEvent]('pieSelectChanged');
    the[_pipeEvent]('pieSelected');
    the[_pipeEvent]('pieUnselected');

    // 地图区域切换选中状态的事件。
    the[_pipeEvent]('mapSelectChanged');
    the[_pipeEvent]('mapSelected');
    the[_pipeEvent]('mapUnselected');
    the[_pipeEvent]('geoSelectChanged');
    the[_pipeEvent]('geoSelected');
    the[_pipeEvent]('geoUnselected');

    // 平行坐标范围选取事件
    the[_pipeEvent]('axisAreaSelected');

    the[_pipeEvent]('brush');
    the[_pipeEvent]('brushSelected');
};

/**
 * 注册地图
 * @param area
 * @param desc
 */
Chart.map = function (area, desc) {
    echarts.registerMap(area, desc);
};

module.exports = Chart;

// ===========================================
function pipeEvents  (type, source, target) {
    source.on('click', function (params) {
        target.emit('click', params);
    });
}

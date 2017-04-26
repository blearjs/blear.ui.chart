/**
 * 所有的模块、组件
 * @author ydr.me
 * @create 2017-04-26 14:34
 * @update 2017-04-26 14:34
 */


'use strict';

/**
 * Export echarts as CommonJS module
 */
module.exports = require('./echarts/echarts');

// 折线图
require('./echarts/chart/line');
// 柱状图
require('./echarts/chart/bar');
// 饼状图
require('./echarts/chart/pie');
// 散点图
require('./echarts/chart/scatter');
// 动态散点图
require('./echarts/chart/effectScatter');
// 雷达图
require('./echarts/chart/radar');
// 地图
require('./echarts/chart/map');
// 树图
require('./echarts/chart/treemap');
// 关系图
require('./echarts/chart/graph');
// 仪表盘图
require('./echarts/chart/gauge');
// 漏斗图
require('./echarts/chart/funnel');
// 平行坐标
require('./echarts/chart/parallel');
// 桑基图
require('./echarts/chart/sankey');
// 箱线图
require('./echarts/chart/boxplot');
// K线图
require('./echarts/chart/candlestick');
// 多折线图
require('./echarts/chart/lines');
// 热力图
require('./echarts/chart/heatmap');
// 象形柱图
require('./echarts/chart/pictorialBar');
// 主题河流图
require('./echarts/chart/themeRiver');

// 关系组件
require('./echarts/component/graphic');
// 格子组件
require('./echarts/component/grid');
// 说明组件
require('./echarts/component/legend');
// 提示组件
require('./echarts/component/tooltip');
// 轴线点组件
require('./echarts/component/axisPointer');
// 极线组件
require('./echarts/component/polar');
// 地理组件
require('./echarts/component/geo');
// 并线组件
require('./echarts/component/parallel');
// 单轴组件
require('./echarts/component/singleAxis');
// 画笔组件
require('./echarts/component/brush');
// 日历组件
require('./echarts/component/calendar');
// 标题组件
require('./echarts/component/title');
// 数据区域组件
require('./echarts/component/dataZoom');
// 可视地图组件
require('./echarts/component/visualMap');
// 马克点组件
require('./echarts/component/markPoint');
// 马克线组件
require('./echarts/component/markLine');
// 马克区域组件
require('./echarts/component/markArea');
// 时间轴组件
require('./echarts/component/timeline');
// 工具箱组件
require('./echarts/component/toolbox');

require('./zrender/vml/vml');




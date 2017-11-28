var _config = require("../../config");

var __DEV__ = _config.__DEV__;

var zrUtil = require("../../../zrender/core/util");

var Polar = require("./Polar");

var _number = require("../../util/number");

var parsePercent = _number.parsePercent;

var _axisHelper = require("../../coord/axisHelper");

var createScaleByModel = _axisHelper.createScaleByModel;
var niceScaleExtent = _axisHelper.niceScaleExtent;

var CoordinateSystem = require("../../CoordinateSystem");

require("./PolarModel");

// TODO Axis scale
// 依赖 PolarModel 做预处理

/**
 * Resize method bound to the polar
 * @param {module:echarts/coord/polar/PolarModel} polarModel
 * @param {module:echarts/ExtensionAPI} api
 */
function resizePolar(polar, polarModel, api) {
  var center = polarModel.get('center');
  var width = api.getWidth();
  var height = api.getHeight();
  polar.cx = parsePercent(center[0], width);
  polar.cy = parsePercent(center[1], height);
  var radiusAxis = polar.getRadiusAxis();
  var size = Math.min(width, height) / 2;
  var radius = parsePercent(polarModel.get('radius'), size);
  radiusAxis.inverse ? radiusAxis.setExtent(radius, 0) : radiusAxis.setExtent(0, radius);
}
/**
 * Update polar
 */


function updatePolarScale(ecModel, api) {
  var polar = this;
  var angleAxis = polar.getAngleAxis();
  var radiusAxis = polar.getRadiusAxis(); // Reset scale

  angleAxis.scale.setExtent(Infinity, -Infinity);
  radiusAxis.scale.setExtent(Infinity, -Infinity);
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.coordinateSystem === polar) {
      var data = seriesModel.getData();
      radiusAxis.scale.unionExtentFromData(data, 'radius');
      angleAxis.scale.unionExtentFromData(data, 'angle');
    }
  });
  niceScaleExtent(angleAxis.scale, angleAxis.model);
  niceScaleExtent(radiusAxis.scale, radiusAxis.model); // Fix extent of category angle axis

  if (angleAxis.type === 'category' && !angleAxis.onBand) {
    var extent = angleAxis.getExtent();
    var diff = 360 / angleAxis.scale.count();
    angleAxis.inverse ? extent[1] += diff : extent[1] -= diff;
    angleAxis.setExtent(extent[0], extent[1]);
  }
}
/**
 * Set common axis properties
 * @param {module:echarts/coord/polar/AngleAxis|module:echarts/coord/polar/RadiusAxis}
 * @param {module:echarts/coord/polar/AxisModel}
 * @inner
 */


function setAxis(axis, axisModel) {
  axis.type = axisModel.get('type');
  axis.scale = createScaleByModel(axisModel);
  axis.onBand = axisModel.get('boundaryGap') && axis.type === 'category';
  axis.inverse = axisModel.get('inverse');

  if (axisModel.mainType === 'angleAxis') {
    axis.inverse ^= axisModel.get('clockwise');
    var startAngle = axisModel.get('startAngle');
    axis.setExtent(startAngle, startAngle + (axis.inverse ? -360 : 360));
  } // Inject axis instance


  axisModel.axis = axis;
  axis.model = axisModel;
}

var polarCreator = {
  dimensions: Polar.prototype.dimensions,
  create: function (ecModel, api) {
    var polarList = [];
    ecModel.eachComponent('polar', function (polarModel, idx) {
      var polar = new Polar(idx); // Inject resize and update method

      polar.update = updatePolarScale;
      var radiusAxis = polar.getRadiusAxis();
      var angleAxis = polar.getAngleAxis();
      var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
      var angleAxisModel = polarModel.findAxisModel('angleAxis');
      setAxis(radiusAxis, radiusAxisModel);
      setAxis(angleAxis, angleAxisModel);
      resizePolar(polar, polarModel, api);
      polarList.push(polar);
      polarModel.coordinateSystem = polar;
      polar.model = polarModel;
    }); // Inject coordinateSystem to series

    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'polar') {
        var polarModel = ecModel.queryComponents({
          mainType: 'polar',
          index: seriesModel.get('polarIndex'),
          id: seriesModel.get('polarId')
        })[0];
        seriesModel.coordinateSystem = polarModel.coordinateSystem;
      }
    });
    return polarList;
  }
};
CoordinateSystem.register('polar', polarCreator);
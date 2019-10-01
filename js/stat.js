'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 50;
  var TEXT_HEIGHT = 20;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = Math.max.apply(null, arr);
    return maxElement;
  };
  var getRandomSaturation = function () {
    return Math.floor(Math.random() * 100);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 150, 30);
    ctx.fillText('Список результатов:', 150, 45);

    var maxTime = Math.floor(getMaxElement(times));
    for (var i = 0; i < names.length; i++) {
      var BAR_HEIGHT = Math.floor((times[i] * 100) / maxTime);
      var TEXT_NAMES_X = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
      var TEXT_NAMES_Y = CLOUD_Y + CLOUD_HEIGHT - (GAP - TEXT_HEIGHT);
      var TEXT_RESULT_X = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
      var TEXT_RESULT_Y = CLOUD_Y + CLOUD_HEIGHT - (BAR_HEIGHT + GAP + TEXT_HEIGHT);
      var COLUMN_X = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
      var COLUMN_Y = CLOUD_Y + CLOUD_HEIGHT - GAP;
      ctx.fillStyle = '#333';
      ctx.fillText(names[i], TEXT_NAMES_X, TEXT_NAMES_Y);
      ctx.fillText(Math.floor(times[i]), TEXT_RESULT_X, TEXT_RESULT_Y);
      ctx.fillStyle = 'hsl(215.25, ' + getRandomSaturation() + '%, ' + '30%)';
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(COLUMN_X, COLUMN_Y, BAR_WIDTH, -BAR_HEIGHT);
    }
  };
})();

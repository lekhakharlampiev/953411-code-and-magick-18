'use strict';

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
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
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
    var barHeight = Math.floor(-(times[i] * 100) / maxTime);
    ctx.fillStyle = 'hsl(215.25, ' + (-barHeight) + '%, ' + '30%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (GAP - TEXT_HEIGHT));
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (-barHeight + GAP + TEXT_HEIGHT));
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP, BAR_WIDTH, barHeight);
  }
};

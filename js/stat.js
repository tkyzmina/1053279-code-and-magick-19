'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_GAP = 20;
var barHeight = CLOUD_HEIGHT - BAR_GAP * 2 - TEXT_GAP;

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

var getRandomBlue = function () {
  var r = 0;
  var g = 0;
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = 'black';
  ctx.font = 'normal 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + BAR_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + BAR_GAP, CLOUD_Y + BAR_GAP + TEXT_GAP);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.font = 'normal 16px PT Mono';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomBlue();
      console.log(getRandomBlue());
    }

    var X = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var HEIGHT = (barHeight * times[i]) / maxTime;
    var Y = CLOUD_HEIGHT - (HEIGHT + 20);

    ctx.fillRect(
      X,
      Y,
      BAR_WIDTH,
      HEIGHT
    );

  }
};

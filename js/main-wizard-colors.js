'use strict';

(function () {
  var coatColor = window.const.COAT_COLOR;
  var eyesColor = window.const.EYES_COLOR;

  window.utils.shuffle(window.const.EYES_COLOR);
  window.utils.shuffle(window.const.COAT_COLOR);

  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  window.utils.shuffle(fireballs);

  var wizardCoatColor = document.querySelector('.wizard-coat');
  var inputCoatColor = document.querySelector('input[name = "coat-color"]');
  wizardCoatColor.addEventListener('click', function () {
    var rand = Math.floor(Math.random() * coatColor.length);
    wizardCoatColor.style.fill = coatColor[rand];
    inputCoatColor.value = wizardCoatColor.style.fill;
  });

  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var inputEyesColor = document.querySelector('input[name = "eyes-color"]');
  wizardEyesColor.addEventListener('click', function () {
    var rand = Math.floor(Math.random() * eyesColor.length);
    wizardEyesColor.style.fill = eyesColor[rand];
    inputEyesColor.value = wizardEyesColor.style.fill;
  });

  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var inputFireballColor = document.querySelector('input[name = "fireball-color"]');
  fireballColor.addEventListener('click', function () {
    var rand = Math.floor(Math.random() * fireballs.length);
    fireballColor.style.background = fireballs[rand];
    inputFireballColor.value = fireballColor.style.background;
  });
})();

'use strict';
var WIZARDS_TOTAL = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = window.const.COAT_COLOR;
var eyesColor = window.const.EYES_COLOR;

window.utils.shuffle(coatColor);
window.utils.shuffle(eyesColor);

var getVisardData = function (total) {
  var wizards = [];
  for (var i = 0; i < total; i++) {
    var wizard = {
      name: WIZARD_NAMES[i] + ' ' + WIZARD_SURNAMES[i],
      coatColor: coatColor[i],
      eyesColor: eyesColor[i],
    };
    wizards.push(wizard);
  }
  return wizards;
};

var wizards = getVisardData(WIZARDS_TOTAL);

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var setupAddWizards = function () {
  wizards.forEach(function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  });
};
setupAddWizards();


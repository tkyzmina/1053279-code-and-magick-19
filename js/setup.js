'use strict';
var WIZARDS_TOTAL = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// ф-я перемешивания из интернета
var shuffle = function (myArray) {
  for (var i = 0; i <= myArray.length - 1; i++) {
    var index;
    var valueIndex;
    index = Math.floor(Math.random() * i);
    valueIndex = myArray[index];
    myArray[index] = myArray[i];
    myArray[i] = valueIndex;
  }
};

// перемешаем элементы в массиве
shuffle(WIZARD_NAMES);
shuffle(WIZARD_SURNAMES);
shuffle(coatColor);
shuffle(eyesColor);


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

var setup = function () {
  wizards.forEach(function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  });
};
setup();


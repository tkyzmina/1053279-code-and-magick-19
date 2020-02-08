'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// создаю 4 массива
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
// ф-я перемешивания из интернета
var shuffle = function (myArray) {
  var index;
  var valueIndex;
  for (var i = 0; i <= myArray.length - 1; i++) {
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

var WIZARDS_TOTAL = 4;
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

var makeWizards = getVisardData(WIZARDS_TOTAL);

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = makeWizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = makeWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = makeWizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

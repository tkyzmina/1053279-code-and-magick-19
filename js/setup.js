'use strict';
var WIZARDS_TOTAL = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

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
shuffle(fireballs);


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

// ------------------------------ module4-task1-----------------------

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var nameInput = setup.querySelector('.setup-user-name');
var booleanNameInput = true;

nameInput.addEventListener('focus', function () {
  booleanNameInput = true;
});

nameInput.addEventListener('blur', function () {
  booleanNameInput = false;
});

var onPopupEscPress = function (evt) {
  if (!booleanNameInput === true && evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

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



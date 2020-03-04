'use strict';
(function () {
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
    if (!booleanNameInput && evt.key === window.utils.ESC_KEY) {
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
    if (evt.key === window.utils.ENTER_KEY) {
      closePopup();
    }
  });

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      openPopup();
    }
  });
})();

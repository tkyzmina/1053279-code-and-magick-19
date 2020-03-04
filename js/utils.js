'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

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

  window.utils = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    shuffle: shuffle,
  };
})();

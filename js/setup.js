'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var tamlate = document.querySelector('#similar-wizard-template').content;
  var dom = {
    similar: setup.querySelector('.setup-similar'),
    similarList: setup.querySelector('.setup-similar-list'),
    open: document.querySelector('.setup-open'),
    close: setup.querySelector('.setup-close'),
    clone: tamlate.querySelector('.setup-similar-item'),
    input: {
      username: setup.querySelector('input[name="username"]'),
      coat: setup.querySelector('input[name="coat-color"]'),
      eyes: setup.querySelector('input[name="eyes-color"]'),
      fireball: setup.querySelector('input[name="fireball-color"]')
    },
    wizard: {
      coat: setup.querySelector('.wizard-coat'),
      eyes: setup.querySelector('.wizard-eyes'),
      fireball: setup.querySelector('.setup-fireball-wrap')
    }
  };
  var data = {
    names: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coats: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyes: ['black', 'red', 'blue', 'yellow', 'green'],
    fireball: ['#e6e848', '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5']
  };
  dom.similar.classList.remove('hidden');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var generateProperties = function () {
    var wizard = {};
    wizard.name = getRandomElement(data.names) + ' ' + getRandomElement(data.surnames);
    wizard.coat = getRandomElement(data.coats);
    wizard.eyes = getRandomElement(data.eyes);
    return wizard;
  };

  var generateOjects = function (count) {
    var similarWizards = [];
    for (var i = 0; i < count; i++) {
      similarWizards.push(generateProperties());
    }
    return similarWizards;
  };

  var createItem = function (element, item) {
    var cloneElement = element.cloneNode(true);
    var wizardName = cloneElement.querySelector('.setup-similar-label');
    var wizardCoatColor = cloneElement.querySelector('.wizard-coat');
    var wizardEyesColor = cloneElement.querySelector('.wizard-eyes');
    wizardName.textContent = item.name;
    wizardCoatColor.style.fill = item.coat;
    wizardEyesColor.style.fill = item.eyes;
    return cloneElement;
  };

  var getSimilarWisardsList = function (arr) {
    var fragment = new DocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragment.prepend(createItem(dom.clone, arr[i]));
    }
    return fragment;
  };

  var similarProperties = generateOjects(4);
  var similarWisardsList = getSimilarWisardsList(similarProperties);
  dom.similarList.prepend(similarWisardsList);

  var buttonSetupOpenClickHandler = function () {
    setup.classList.remove('hidden');
  };
  dom.open.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      buttonSetupOpenClickHandler();
    }
  });

  dom.open.addEventListener('click', buttonSetupOpenClickHandler);

  var buttonSetupCloseClickHandler = function () {
    setup.classList.add('hidden');
  };
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (evt.target !== dom.input.username) {
        buttonSetupCloseClickHandler();
      }
    }
  });
  dom.close.addEventListener('click', buttonSetupCloseClickHandler);
  dom.close.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      buttonSetupCloseClickHandler();
    }
  });
  var wizardCoatClickhandler = function () {
    var coatFill = getRandomElement(data.coats);
    dom.wizard.coat.style.fill = coatFill;
    dom.input.coat.value = coatFill;
  };
  dom.wizard.coat.addEventListener('click', wizardCoatClickhandler);
  var wizardEyesClickHandler = function () {
    var eyeFill = getRandomElement(data.eyes);
    dom.wizard.eyes.style.fill = eyeFill;
    dom.input.eyes.value = eyeFill;
  };
  dom.wizard.eyes.addEventListener('click', wizardEyesClickHandler);
  var fireballClickhandler = function () {
    var input = dom.input.fireball;
    var fireball = dom.wizard.fireball;
    var colors = data.fireball;
    var index = data.fireball.indexOf(input.value);
    var nextIndex = index + 1;
    var nextColor = colors[nextIndex];
    if (nextIndex === colors.length) {
      input.value = colors[0];
    } else {
      input.value = nextColor;
    }
    fireball.style.backgroundColor = input.value;
  };
  dom.wizard.fireball.addEventListener('click', fireballClickhandler);
})();

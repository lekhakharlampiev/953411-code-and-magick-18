'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var templateContent = document.querySelector('#similar-wizard-template').content;
var similarItem = templateContent.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

setupSimilar.classList.remove('hidden');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#e6e848', '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5'];

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateProperties = function () {
  var wizard = {};
  wizard.name = getRandomElement(names) + ' ' + getRandomElement(surnames);
  wizard.coatColor = getRandomElement(coats);
  wizard.eyesColor = getRandomElement(eyes);
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
  wizardCoatColor.style.fill = item.coatColor;
  wizardEyesColor.style.fill = item.eyesColor;
  return cloneElement;
};

var getSimilarWisardsList = function (arr) {
  var fragment = new DocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.prepend(createItem(similarItem, arr[i]));
  }
  return fragment;
};

var similarProperties = generateOjects(4);
var similarWisardsList = getSimilarWisardsList(similarProperties);
similarList.prepend(similarWisardsList);

var buttonSetupOpenClickHandler = function () {
  setup.classList.remove('hidden');
};
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    buttonSetupOpenClickHandler();
  }
});

setupOpen.addEventListener('click', buttonSetupOpenClickHandler);

var buttonSetupCloseClickHandler = function () {
  setup.classList.add('hidden');
};
var inputUzerName = setup.querySelector('input[name="username"]');
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (evt.target !== inputUzerName) {
      buttonSetupCloseClickHandler();
    }
  }
});
setupClose.addEventListener('click', buttonSetupCloseClickHandler);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    buttonSetupCloseClickHandler();
  }
});

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
var wizardCoatClickhandler = function () {
  var coutFill = getRandomElement(coats);
  wizardCoat.style.fill = coutFill;
  wizardCoatInput.value = coutFill;
};
wizardCoat.addEventListener('click', wizardCoatClickhandler);

var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');
var wizardEyesClickHandler = function () {
  var eyeFill = getRandomElement(eyes);
  wizardEyes.style.fill = eyeFill;
  wizardEyesInput.value = eyeFill;
};
wizardEyes.addEventListener('click', wizardEyesClickHandler);

var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = setup.querySelector('input[name="fireball-color"]');

var fireballClickhandler = function () {
  var index = fireballColors.indexOf(fireballInput.value);
  var nexIndex = index + 1;
  if (nexIndex === fireballColors.length) {
    fireballInput.value = fireballColors[0];
  } else {
    fireballInput.value = fireballColors[nexIndex];
  }
  fireball.style.backgroundColor = fireballInput.value;
};
fireball.addEventListener('click', fireballClickhandler);

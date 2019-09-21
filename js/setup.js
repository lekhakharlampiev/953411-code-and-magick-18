'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var templateContent = document.querySelector('#similar-wizard-template').content;
var similarItem = templateContent.querySelector('.setup-similar-item');


setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

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

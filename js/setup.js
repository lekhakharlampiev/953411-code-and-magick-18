'use strict';
var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarList = document.querySelector('.setup-similar-list');
var templateContent = document.querySelector('#similar-wizard-template').content;
var similarItem = templateContent.querySelector('.setup-similar-item');


setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * (0 - arr.length)) + arr.length];
}

var similarWizards = [];
for (var i = 0; i <= 4; i++) {
  var wizard = {};
  wizard.name = getRandomElement(names) + ' ' + getRandomElement(surname);
  wizard.coatColor = getRandomElement(coat);
  wizard.eyesColor = getRandomElement(eyes);
  similarWizards.push(wizard);
}

function getSimilarWisardsList(arr) {
  var fragment = new DocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    var cloneElement = similarItem.cloneNode(true);
    var wizardName = cloneElement.querySelector('.setup-similar-label');
    var wizardCoatColor = cloneElement.querySelector('.wizard-coat');
    var wizardEyesColor = cloneElement.querySelector('.wizard-eyes');
    wizardName.textContent = arr[i].name;
    wizardCoatColor.style.fill = arr[i].coatColor;
    wizardEyesColor.style.fill = arr[i].eyesColor;
    fragment.prepend(cloneElement);
  }
  return fragment;
}
similarList.prepend(getSimilarWisardsList(similarWizards));

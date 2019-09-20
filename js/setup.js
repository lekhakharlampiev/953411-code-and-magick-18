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

function toGeneratedProperties() {
  var wizard = {};
  wizard.name = getRandomElement(names) + ' ' + getRandomElement(surname);
  wizard.coatColor = getRandomElement(coat);
  wizard.eyesColor = getRandomElement(eyes);
  return wizard;
}
function getGenerateObject(count) {
  var similarWizards = [];
  for (var i = 0; i < count; i++) {
    similarWizards.push(toGeneratedProperties());
  }
  return similarWizards;
}
console.log(toGeneratedProperties(4));
function getCreateItem(element, item) {
  var cloneElement = element.cloneNode(true);
  var wizardName = cloneElement.querySelector('.setup-similar-label');
  var wizardCoatColor = cloneElement.querySelector('.wizard-coat');
  var wizardEyesColor = cloneElement.querySelector('.wizard-eyes');
  wizardName.textContent = item.name;
  wizardCoatColor.style.fill = item.coatColor;
  wizardEyesColor.style.fill = item.eyesColor;
  return cloneElement;
}
function getSimilarWisardsList(arr) {
  var fragment = new DocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.prepend(getCreateItem(similarItem, arr[i]));
  }
  return fragment;
}
function render(element, pasteElements) {
  element.prepend(pasteElements);
}
render(similarList, getSimilarWisardsList(getGenerateObject(4)));

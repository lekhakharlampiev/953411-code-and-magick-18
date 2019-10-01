'use strict';
(function () {
  var dom = {};
  dom.setup = document.querySelector('.setup');
  dom.upload = dom.setup.querySelector('.upload');
  dom.upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var start = {
      x: evt.clientY,
      y: evt.clientY
    };
    var MouseMoveHandle = function (moveEvt) {
      moveEvt.preventDefault();
      var move = {
        x: 
      }


    };
    var MouseUpHandle = function () {

    };
    document.addEventListener('mousemove', MouseMoveHandle);
    document.addEventListener('mouseup', MouseUpHandle);
  });
})();

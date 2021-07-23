$(function () {
  'use strict';

  var boxElem = document.getElementById('box1');
  var pointerElem = document.getElementById('menu');

  function onMouseMove(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var crd = boxElem.getBoundingClientRect();
    var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

    requestAnimationFrame(function movePointer() {
      if (activePointer) {
        pointerElem.classList.remove('box-pointer-hidden');
        pointerElem.style.left = Math.floor(mouseX) + 'px';
      } else {
        pointerElem.classList.add('box-pointer-hidden');
      }
    });
  }

  function disablePointer() {
    pointerElem.style.left = "34%";
    requestAnimationFrame(function hidePointer() {
      pointerElem.classList.add('box-pointer-hidden');
    });
  }



  boxElem.addEventListener('mousemove', onMouseMove, false);
  boxElem.addEventListener('mouseleave', disablePointer, false);

  $('.slider__slide-item').slick({
    infinite: false,
    dots: true,
  });
  
  $('.header__brgr').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
  });
});

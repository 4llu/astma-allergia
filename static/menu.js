$(document).ready(function(){
  $('.js-menu-trigger, .menu__fade-screen, .sliding-panel-close').on('click touchstart',function (e) {
    $('.menu__content, .menu__fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});

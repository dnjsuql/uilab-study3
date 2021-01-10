var tab = (function () {
  var $tab, $menu, $contents, $panel;

  var toggle = function (target, index) {
      target.addClass('active').siblings().removeClass('active');
      $panel.eq(index).addClass('active').siblings().removeClass('active');
  };

  var events = function () {
      $menu.on('click', function() {
          var target = $(this);
          var index = target.index();
          toggle(target, index);
      });
  };

  var init = function () {
      $tab = $('.tab');
      $menu = $tab.find('.tab__list');
      $contents = $('.tab__contents');
      $panel = $contents.find('.tab__panel');

      $menu.eq(0).addClass('active');
      $panel.eq(0).addClass('active');
      events();
  };
  return {
    init: init,
  };
})();

var carousel = (function () {
  var $list, num;

  var init = function () {
    $list = document.querySelector('.carousel-list');
    num = 0;
    setInterval (function() {
      num = (num + 1) % 3;
      $list.style.marginLeft = (-900 * num) + "px";
    }, 2000);

  };
  return {
    init: init,
  };

})();

$(document).ready(function () {
  tab.init();
  carousel.init();
});
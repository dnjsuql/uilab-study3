function heroCarousel(rootClass) {
    var options = {
        // 자동플레이 true / false
        auto: true,
        // 자동전환 딜레이
        time: 5000,
      },
      sliderRoot = $('.' + rootClass),
      sliderArray = $('.hero__item'),
      intervalValue = null,
      i,
      num = 0;

    var sliderLink = $('.hero__link');

    for (i = 0; i < sliderArray.length; i += 1) {
      sliderLink.append(
        '<button class="hero__bullet" data-slide-index="' + i + '" >' + (i + 1) + '</button>'
      );
      if (i !== 0) {
        $(sliderArray[i]).hide();
      }
    }
    var sliderLinkButton = $('.hero__bullet');
    $(sliderLinkButton[0]).addClass('on');

    function interval() {
      var srcSlider = $(sliderArray[num % sliderArray.length]),
        targetSliderNum = $(sliderArray[num % sliderArray.length]).attr('data-next');
        srcSlider.hide();
      $(sliderArray[targetSliderNum]).show();
      sliderLinkButton.removeClass('on');
      $(sliderLinkButton[targetSliderNum]).addClass('on');
      num++;
    }
    function sliderEvent(src, target) {
      clearInterval(intervalValue);
      $(sliderArray[src]).hide();
      $(sliderArray[target]).show();
      sliderLinkButton.removeClass('on');
      $(sliderLinkButton[target]).addClass('on');
      num = target;
      intervalValue = setInterval(interval, options.time);
    }
    if (options.auto) {
      intervalValue = setInterval(interval, options.time);
    }

    sliderLinkButton.on('click', function () {
      if (num % sliderArray.length !== Number($(this).attr('data-slide-index'))) {
        sliderEvent(num % sliderArray.length, $(this).attr('data-slide-index'));
      }
    });
    sliderRoot.on('click', function (e) {
      e.preventDefault();
      var clickTarget = e.target;
      if (
        $(clickTarget).context.nodeName === 'DIV' &&
        clickTarget.className !== 'hero__link'
      ) {
        var val = $(clickTarget).attr('data-value'),
          nextNumber = $(clickTarget).attr('data-next');
        sliderEvent(val, nextNumber);
      }
    });
  }
  $(document).ready(function(){
      heroCarousel('hero');
  });
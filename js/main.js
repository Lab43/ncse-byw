(function($) {

  var mapOffset = $('#map').offset().top
    , mapFixed = false
  ;

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop()
      , fix = (mapOffset - scrollTop) < 0;
    if (fix && !mapFixed) {
      mapFixed = true;
      $('#map').addClass('fix');
    } else if (!fix && mapFixed) {
      mapFixed = false;
      $('#map').removeClass('fix');
    }
  });

  var $marker = $('#marker');

  $('#key').hover(function() {
    $marker.removeClass('bounceOut').addClass('bounceInDown');
  }, function () {
    $marker.removeClass('bounceInDown').addClass('bounceOut');
  });

})(jQuery);
(function($) {
  'use strict';

  $.Pages.init();

  $('.social-icon i[class^=icon-]').each(function() {
    $(this).clone().addClass($(this).attr('class') + '-cloned').appendTo($(this).parent());
  });

  $('[data-fitvids]').fitVids();

  $('p').unorphanize();

  //Intialize Slider
  var slider = new Swiper('#hero', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 1000
  });
  //
  // $('[data-fitvids]').each(function () {
  //   var vidwrapper = $(this).find('.fluid-width-video-wrapper').css({
  //     'opacity': 0,
  //     'visibility': 'hidden'
  //   });
  //   $(this).click(function () {
  //     vidwrapper.css({
  //       'opacity': 1,
  //       'visibility': 'visible'
  //     });
  //     $(this).unbind("click");
  //   });
  // });

  //
  // function fbLikeCount(id, appid, appsecret) {
  //   var url = 'https://graph.facebook.com/' + id + '?access_token=' + appid + '|' + appsecret + '&fields=likes&callback=?';
  //   $.getJSON(url, function (data) {
  //     console.log(data.likes);
  //   });
  // }
  // fbLikeCount('HafizHamidun', '1490111327981846', '22742b107b93cd98e66b7522b5c51561');
  //
  // function igFollowersCount(id, access_token) {
  //   var url = 'https://api.instagram.com/v1/users/' + id + '/?access_token=' + access_token + '&callback=?';
  //   $.getJSON(url, function (data) {
  //     console.log(data.data.counts.followed_by);
  //   });
  // }
  // igFollowersCount('9084392', '32695385.4035b3c.d0dcbf6b13454f608227ade96235a2f9')

})(window.jQuery);

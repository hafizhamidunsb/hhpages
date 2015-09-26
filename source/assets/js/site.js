(function($) {
  'use strict';

  $.Pages.HHinit = function() {
    $('a[data-body]').each(function() {
      if ($('body').hasClass($(this).data('body'))) {
        $(this).addClass('active');
      }
    });

    $('.social-icon i[class^=icon-]').each(function() {
      $(this).clone().addClass($(this).attr('class') + '-cloned').appendTo($(this).parent());
    });

    $('[data-fitvids]').fitVids();

    $('[data-orphan]').unorphanize();

    var slider = new Swiper('#hero', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      parallax: true,
      speed: 1000
    });

    var $contactForm = $('#contact-form');
    $contactForm.validate({
      submitHandler: function(form) {
        $contactForm.find('.alert').remove();

        return $.ajax({
          url: '//formspree.io/wansaleh@gmail.com',
          method: 'POST',
          data: $contactForm.serialize(),
          dataType: 'json',

          success: function(data) {
            $contactForm.append('<div class="m-t-10 alert alert-success fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-check"></i> <strong>Success</strong> Your message has been sent. Thank you.</div>');
          },

          error: function(err) {
            $contactForm.append('<div class="m-t-10 alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Error</strong> Something is wrong with this.</div>');
          }
        });
      },

      invalidHandler: function() {
        $contactForm.find('.alert').remove();
        $contactForm.append('<div class="m-t-10 alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Error</strong> Something is wrong with this.</div>');
      }
    });

    var nFormatter = function(num, digits) {
      var si = [
        { value: 1E18, symbol: "E" },
        { value: 1E15, symbol: "P" },
        { value: 1E12, symbol: "T" },
        { value: 1E9,  symbol: "G" },
        { value: 1E6,  symbol: "M" },
        { value: 1E3,  symbol: "k" }
      ], i;
      for (i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
          return (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol;
        }
      }
      return num;
    };

    var facebookLike = function(userid, appid, appsecret) {
      var url = "https://graph.facebook.com/" + userid + "?access_token=" + appid + "|" + appsecret + "&fields=likes&callback=?";
      $.getJSON(url, function(data) {
        $('.c-facebook').addClass('loaded');
        $('.c-facebook .count').html(nFormatter(data.likes, 1));
      });
    };

    var instagramFollowers = function(userid, access_token) {
      var url = "https://api.instagram.com/v1/users/" + userid + "/?access_token=" + access_token + "&callback=?";
      $.getJSON(url, function(data) {
        $('.c-instagram').addClass('loaded');
        $('.c-instagram .count').html(nFormatter(data.data.counts.followed_by, 1));
      });
    };

    var twitterFollowers = function() {
      var url = "http://do.wansaleh.com/hh/twitter.php?user=hafizhamidun&callback=?";
      $.getJSON(url, function(data) {
        $('.c-twitter').addClass('loaded');
        $('.c-twitter .count').html(nFormatter(data.followers_count, 1));
      });
    };

    facebookLike('HafizHamidun', '1490111327981846', '22742b107b93cd98e66b7522b5c51561');
    instagramFollowers('9084392', '32695385.4035b3c.d0dcbf6b13454f608227ade96235a2f9');
    twitterFollowers();

    // var respondify = function() {
    //   $('iframe[src*="embed.spotify.com"]').each(function() {
    //     $(this).css('width', $(this).parent(1).css('width'));
    //     $(this).attr('src', $(this).attr('src'));
    //   });
    // };
    //
    // respondify();
    // $(window).resize(function() {
    //   respondify();
    // });
  };

  $.Pages.init();
  $.Pages.HHinit();

})(window.jQuery);

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

        $.ajax({
          url: '//formspree.io/newmedia@hafizhamidun.com',
          method: 'POST',
          data: $contactForm.serialize(),
          dataType: 'json',

          success: function(data) {
            $contactForm.append('<div class="alert alert-success fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-check"></i> <strong>Success</strong> Your message has been sent. Thank you.</div>');
          },

          error: function(err) {
            $contactForm.append('<div class="alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Error</strong> Please correct the errors above.</div>');
          }
        });
      },

      invalidHandler: function(event, validator) {
        console.log(validator.numberOfInvalids());
        $contactForm.find('.alert').remove();
        $contactForm.append('<div class="alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Invalid</strong> Please correct the errors above.</div>');
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

    var socialCount = function() {
      $.getJSON('http://do.wansaleh.com/hh/social.php?callback=?', function(data) {
        $('.c-facebook .count').html(nFormatter(data.facebook.likes, 1));
        $('.c-twitter .count').html(nFormatter(data.twitter.followers_count, 1));
        $('.c-instagram .count').html(nFormatter(data.instagram.counts.followed_by, 1));
        $('.c-facebook, .c-twitter, .c-instagram').addClass('loaded');
      });
    };

    socialCount();

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

(function($) {
  "use strict";

  $.Pages.HHinit = function () {
    $("a[data-body]").each(function() {
      if ($('body').hasClass($(this).data('body'))) {
        $(this).addClass('active');
      }
    });

    $(".social-icon i[class^=icon-]").each(function() {
      $(this).clone().addClass($(this).attr("class") + "-cloned").appendTo($(this).parent());
    });

    $("[data-fitvids]").fitVids();

    $("[data-orphan]").unorphanize();

    //Intialize Slider
    var slider = new Swiper("#hero", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      parallax: true,
      speed: 1000
    });

    var $contactForm = $('#contact-form');

    $contactForm.validate({
      submitHandler: function (form) {
        $contactForm.find('.alert').remove();
        $.ajax({
      		url: '//formspree.io/wansaleh@gmail.com',
      		method: 'POST',
      		data: $contactForm.serialize(),
      		dataType: 'json',
      		success: function(data) {
            $contactForm.append('<div class="m-t-10 alert alert-success fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-check"></i> <strong>Success</strong> Your message has been sent. Thank you.</div>');
      		},
      		error: function(err) {
            $contactForm.append('<div class="m-t-10 alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Error</strong> Something is wrong with this.</div>')
      		}
      	});
      },
      invalidHandler: function () {
        $contactForm.find('.alert').remove();
        $contactForm.append('<div class="m-t-10 alert alert-error fade in" role="alert"><button class="close" data-dismiss="alert"></button><i class="fa fa-times"></i> <strong>Error</strong> Something is wrong with this.</div>')
      }
    });

    // function fbLikeCount(id, appid, appsecret) {
    //   var url = "https://graph.facebook.com/" + id + "?access_token=" + appid + "|" + appsecret + "&fields=likes&callback=?";
    //   $.getJSON(url, function (data) {
    //     console.log(data.likes);
    //   });
    // }
    // fbLikeCount("HafizHamidun", "1490111327981846", "22742b107b93cd98e66b7522b5c51561");
    //
    // function igFollowersCount(id, access_token) {
    //   var url = "https://api.instagram.com/v1/users/" + id + "/?access_token=" + access_token + "&callback=?";
    //   $.getJSON(url, function (data) {
    //     console.log(data.data.counts.followed_by);
    //   });
    // }
    // igFollowersCount("9084392", "32695385.4035b3c.d0dcbf6b13454f608227ade96235a2f9")
  }


  $.Pages.init();
  $.Pages.HHinit();

})(window.jQuery);

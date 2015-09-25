(function($) {
  "use strict";

  var $gallery = $(".gallery");
  var applyIsotope = function() {
    $gallery.isotope({
      itemSelector: ".grid",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
        gutter: 0
      }
    });
    setTimeout(function () {
      $gallery.isotope("layout");
    });
  }

  $gallery.waitForImages(true).done(function() {
    applyIsotope();
  });

})(window.jQuery);

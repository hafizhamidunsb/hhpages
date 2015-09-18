$(function() {

  /* GRID
  -------------------------------------------------------------*/

  /*
      Wait for the images to be loaded before applying
      Isotope plugin.
  */
  var $gallery = $('.gallery');
  $gallery.imagesLoaded(function() {
    applyIsotope();
  });

  /*  Apply Isotope plugin
      isotope.metafizzy.co
  */
  var applyIsotope = function() {
    $gallery.isotope({
      itemSelector: '.gallery-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: 0
      }
    })
  }

});

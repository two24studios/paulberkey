$(function() {

  $("#header").headroom({
    offset : 84,
  });

  $('.lightgallery').lightGallery({
    download: false
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function () {
		if ($(this).scrollTop() > 420) {
      $('#back-top').fadeIn();
    }
		else {
      $('#back-top').fadeOut();
    }

	});

  $('.media-container').click(function () {
    $('.media-container iframe').css("pointer-events", "auto");
  });

  $( ".media-container" ).mouseleave(function() {
    $('.media-container iframe').css("pointer-events", "none");
  });

});

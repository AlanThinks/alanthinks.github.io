if ($(window).width() < 350) {
  $(function() {
    var button = $(".barcelona-cta");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      // Was going to use all jQuery, but ended up using a mix of vanilla JS because I was experimenting with a possible animation;
      //   if (scroll >= 100) {
      //     button.addClass("barcelona-cta-fix");
      //   } else {
      //     button.removeClass("barcelona-cta-fix");
      //   }
      if (scroll >= 95) {
        document.getElementsByClassName("barcelona-cta")[0].style.position =
          "static";
      } else {
        document.getElementsByClassName("barcelona-cta")[0].style.position =
          "fixed";
      }
    });
  });
} else if ($(window).width() < 451 && $(window).height() > 729) {
  //   $(function() {
  //     var button = $(".barcelona-cta");
  //     $(window).scroll(function() {
  //       var scroll = $(window).scrollTop();
  //       // Was going to use all jQuery, but ended up using a mix of vanilla JS because I was experimenting with a possible animation;
  //       //   if (scroll >= 100) {
  //       //     button.addClass("barcelona-cta-fix");
  //       //   } else {
  //       //     button.removeClass("barcelona-cta-fix");
  //       //   }
  //       if (scroll >= 95) {
  //         document.getElementsByClassName("barcelona-cta")[0].style.position =
  //           "static";
  //       } else {
  //         document.getElementsByClassName("barcelona-cta")[0].style.position =
  //           "fixed";
  //       }
  //     });
  //   });
} else if ($(window).width() < 451 && $(window).width() > 350) {
  $(function() {
    var button = $(".barcelona-cta");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      // Was going to use all jQuery, but ended up using a mix of vanilla JS because I was experimenting with a possible animation;
      //   if (scroll >= 100) {
      //     button.addClass("barcelona-cta-fix");
      //   } else {
      //     button.removeClass("barcelona-cta-fix");
      //   }
      if (scroll >= 50) {
        document.getElementsByClassName("barcelona-cta")[0].style.position =
          "static";
      } else {
        document.getElementsByClassName("barcelona-cta")[0].style.position =
          "fixed";
      }
    });
  });
}
// else {
//   document.getElementsByClassName("barcelona-cta")[0].style.position = "static";
// }

$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2250,
  autoplayHoverPause: true
});

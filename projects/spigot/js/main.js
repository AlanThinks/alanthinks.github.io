if ($(window).width() < 400 && $(window).height() > 800) {
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
} else if ($(window).width() < 350) {
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
      if (scroll >= 60) {
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

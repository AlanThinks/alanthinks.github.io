/* main js */
$(document).ready(function() {
  "use strict"

  function preload() {
    var $preloader = $("#page-preloader"),
      $spinner = $preloader.find(".spinner-loader")
    $(window).on("load", function() {
      $spinner.fadeOut("fast")
      $preloader.fadeOut("slow")
      // $preloader.delay(500).fadeOut("slow")
    })
  }

  preload()

  //fixed header
  function fixedHeader(wSc) {
    if (wSc > 10) {
      $(".header").addClass("active")
    } else {
      $(".header").removeClass("active")
    }
  }

  //fixed sidebar
  var sidebarCheck = false
  if ($("div").is(".sidebar-form")) {
    sidebarCheck = true
    var sidebar = $(".sidebar-form")
    var sidebarPos, sidebarHeight, singleProjectSection, singleSectionBottom, ww
    var posChecked = true
    $(window).load(function() {
      ww = $(window).width()
      sidebarHeight = sidebar.outerHeight()
      singleProjectSection = $(".single-project-section")
      singleSectionBottom =
        singleProjectSection.offset().top +
        singleProjectSection.outerHeight() -
        60

      $(window).on("resize", function() {
        ww = $(window).width()
        if (ww > 991 && posChecked) {
          sidebarPos = sidebar.offset().top
          posChecked = false
        }
        sidebarHeight = sidebar.outerHeight()
        singleSectionBottom =
          singleProjectSection.offset().top +
          singleProjectSection.outerHeight() -
          60
      })

      $(window).trigger("resize")
    })
  }
  function fixedSidebar(wSc) {
    if (
      wSc > sidebarPos - 85 &&
      wSc + 85 + sidebarHeight < singleSectionBottom
    ) {
      sidebar.addClass("fixed-sidebar")
      sidebar.removeClass("absolute-sidebar")
    } else if (wSc + 85 + sidebarHeight > singleSectionBottom) {
      sidebar.removeClass("fixed-sidebar")
      sidebar.addClass("absolute-sidebar")
    } else {
      sidebar.removeClass("fixed-sidebar")
      sidebar.removeClass("absolute-sidebar")
    }
  }

  //use fixedSidebar and fixedHeader
  $(window).on("scroll", function() {
    var wSc = $(window).scrollTop()
    fixedHeader(wSc)

    if (sidebarCheck) {
      fixedSidebar(wSc)
    }
  })
  $(window).load(function() {
    $(window).trigger("scroll")
  })

  //change lang cookie
  function readCookie(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
  function setLang() {
    var cookieLang = readCookie("lang")
    if (cookieLang) {
      $(".change-lng ul li a").each(function() {
        if ($(this).text() == cookieLang) {
          $(this)
            .parent("li")
            .addClass("active")
        }
      })
    } else {
      document.cookie = "lang=" + $(".change-lng ul li:first a").text()
      $(".header .change-lng ul li:first").addClass("active")
      $(".mob-menu-wrapper .change-lng ul li:first").addClass("active")
    }
  }
  setLang()
  $(".change-lng ul li a").on("click", function(event) {
    event.preventDefault()
    document.cookie = "lang=" + $(this).text()
    window.location = "index.html"
  })

  //init isotope
  var $grid = $(".projects-wrapper").isotope({
    // options
    itemSelector: ".project-item",
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    },
    masonry: {
      columnWidth: ".project-item"
    }
  })
  $grid.imagesLoaded().progress(function() {
    $grid.isotope("layout")
  })
  //isotope filter
  $(".projects-filter ul li").on("click", function() {
    $(".projects-filter ul li").removeClass("active")
    $(this).addClass("active")
    var filterValue = $(this).attr("data-filter")
    $(".projects-wrapper").isotope({ filter: filterValue })
  })

  //init gradient
  if ($("div").is(".first-screen") || $("div").is(".mob-menu-wrapper")) {
    drawGradient()
  }

  //open google map in new window
  $(".map-link").on("click", function(event) {
    event.preventDefault()
    window.open(
      "https://www.google.com.ua/maps/place/" + $(this).text(),
      "_blank"
    )
  })

  //scroll to anchor
  if ($("header").is(".header-home")) {
    $('.main-menu ul li a[href*="#"], .mobile-menu ul li a[href*="#"]').on(
      "click",
      function(event) {
        event.preventDefault()
        var anchor = $(this).attr("href")
        if ($(anchor).position()) {
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $(anchor).offset().top
              },
              800
            )
        }
      }
    )
  }

  // if($('section').is('.top-main-section')){
  //     $('.first-screen-buttons ul li a[href*="#"],').on('click', function(event){
  //         event.preventDefault();
  //         var anchor = $(this).attr('href');
  //         if($(anchor).position()){
  //             $('html, body').stop().animate({
  //                 scrollTop: $(anchor).offset().top
  //             }, 800);
  //         }
  //     });
  // }

  // Animate Smooth Scroll
  $("#projects-big-btn").on("click", function() {
    const projects = $("#projects").position().top

    $("html, body").animate(
      {
        scrollTop: projects
      },
      900
    )
  })
  $("#contact-big-btn").on("click", function() {
    const contactSection = $("#contact-section").position().top

    $("html, body").animate(
      {
        scrollTop: contactSection
      },
      900
    )
  })

  $("#top-left-logo").on("click", function() {
    const topMainSection = $("#top-main-section").position().top

    $("html, body").animate(
      {
        scrollTop: topMainSection
      },
      900
    )
  })

  $("#alanthinks-portfolio-project").on("click", function() {
    const topMainSection = $("#top-main-section").position().top

    $("html, body").animate(
      {
        scrollTop: topMainSection
      },
      900
    )
  })

  $("#see-live-project-btn").on("click", function() {
    const liveProject = $("#live-project").position().top

    $("html, body").animate(
      {
        scrollTop: liveProject
      },
      900
    )
  })

  //open bootstrap modal from modal
  $(document).on("hidden.bs.modal", ".modal", function() {
    if ($(".modal:visible").length) {
      $(document.body).addClass("modal-open")
      $(document.body).css({ paddingRight: scrollWidth() })
      $("header").css("padding-right", scrollWidth())
    } else {
      $(document.body).css({ paddingRight: 0 })
      $("header").css({ paddingRight: 0 })
    }
  })

  //bootstrap modal fix for fixed header
  function scrollWidth() {
    var div = document.createElement("div")
    div.style.overflowY = "scroll"
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.visibility = "hidden"
    document.body.appendChild(div)
    var paddingRight = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return paddingRight
  }
  $(".modal").on("show.bs.modal", function() {
    $("header").css("padding-right", scrollWidth())
  })
  $(".modal").on("hidden.bs.modal", function() {
    $(".header").css("padding-right", "0")
  })

  //mobile-menu
  $(".mobile-btn, .close-mob-menu").on("click", function() {
    $(".mob-menu-wrapper").toggleClass("active")
  })
  $(".mobile-menu ul li a").on("click", function() {
    $(".mob-menu-wrapper").removeClass("active")
  })

  //init highcharts
  if ($("div").is("#highchart")) {
    Highcharts.chart("highchart", {
      data: {
        table: "datatable"
      },
      chart: {
        type: "column"
      },
      title: {
        text: "Data extracted from a HTML table in the page"
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Rate"
        }
      },
      tooltip: {
        formatter: function() {
          return (
            '<b class="legend-highchart">' +
            this.series.name +
            "</b><br/>" +
            '<span class="highchart-title-desc">' +
            this.point.y +
            " - " +
            this.point.name.toLowerCase() +
            "</span>"
          )
        }
      }
    })
  }

  //init custom scroll
  // $(".scroll-viewport").mCustomScrollbar({
  //   axis: "x",
  //   theme: "dark",
  //   mouseWheel: {
  //     enable: false
  //   },
  //   scrollInertia: 0
  // });

  //init share buttons
  if ($("span").is("#sharing-links")) {
    $("#sharing-links").socialLikes()
  }
})

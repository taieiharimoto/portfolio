$(function() {

  "use strict";

  /*===============================================
    Preloaders
  ===============================================*/
  var $body = $("body");

  $(window).on("load", function () {
    $body.addClass("loaded");
  });

  if ($body.attr("data-preloader") === "2") {
    $body.append($("<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>"));
  }
  
  /*===============================================
    Parallax
  ===============================================*/

  $(".parallax").jarallax({
          speed: .4
      })


  /*===============================================
    Navbar Menu
  ===============================================*/
  var nav = $(".nav");
  var navToggle = $(".nav-toggle-btn");

  //
  // Sticky Navbar //
  //
  if ($(".navbar-sticky").length) {
    var navbarSticky = $(".navbar-sticky");
    var navbarOffset = navbarSticky.offset().top;

    $(window).on("scroll", function() {
      var navbarPlaceholder = $(".navbar-placeholder");

      if ($(window).scrollTop() >= navbarOffset) {
        navbarSticky.addClass("navbar-sticky-apply");
        navbarPlaceholder.addClass("navbar-placeholder-padding");
      }
      else {
        navbarSticky.removeClass("navbar-sticky-apply");
        navbarPlaceholder.removeClass("navbar-placeholder-padding");
      }

      if ($(window).scrollTop() >= navbarOffset + 20) {
        navbarSticky.addClass("navbar-shrink");
      }
      else {
        navbarSticky.removeClass("navbar-shrink");
      }
    });
    // Navbar Sticky Placeholder
    $("<div class='navbar-placeholder'></div>").insertAfter(".navbar-sticky");
  }


  /*===============================================
    Shrink Navbar when starts scrolling
  ===============================================*/
  var navbarFixed = $(".navbar-fixed");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 10) {
      navbarFixed.addClass("navbar-shrink");
    } else {
      navbarFixed.removeClass("navbar-shrink");
    }
  });


  /*===============================================
    Smooth Scrollin on links
  ===============================================*/
  var htmlBody = $("html,body");
  var ssBtn = $(".scrolldown-btn, .scrolldown, .navbar a");

  ssBtn.on("click", function(e) {
    htmlBody.animate({scrollTop: $(this.hash).offset().top}, 700, "easeInOutQuart");
    e.preventDefault();
  });


  /*===============================================
    Scroll to top button
  ===============================================*/
  var scrollTopBtn = $(".scrolltotop");
  //
  // Show/Hide button //
  //
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      scrollTopBtn.addClass("scrolltotop-show");
    }
    else {
      scrollTopBtn.removeClass("scrolltotop-show");
    }
  });

  //
  // Animate button //
  //
  scrollTopBtn.on("click", function(){
    htmlBody.animate({scrollTop : 0}, 600, "easeInOutQuart");
    return false;
  });
  

  /*===============================================
    Back to main button
  ===============================================*/
  var backToMainBtn = $(".backtomain");
  //
  // Show/Hide button //
  //
  $(window).on("load", setTimeout(function() {
      backToMainBtn.addClass("backtomain-show")},300)

  );



  /*===============================================
    Show projects button
  ===============================================*/
  var showProjectsBtn = $(".showprojectsbutton");
  //
  // Show/Hide button //
  //
  $(window).on("load", setTimeout(function(){
      showProjectsBtn.addClass("showprojectsbutton-show")},500)

  );

  /*===============================================
    Portfolio
  ===============================================*/
  $(".portfolio-wrapper").imagesLoaded(function() {
    var $portfolioWrapper = $(".portfolio-wrapper").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3 second
    });
    var filter = $(".filter ul li");

    // Portfolio Filter //
    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });


  /*===============================================
    Owl Carousel Sliders
  ===============================================*/
  $(".owl-carousel").each( function() {
    var $carousel = $(this);

    var $defaults = {
      rewind: true,
      navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
      autoHeight: true, 
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    }

    var $options = {
      items: $carousel.data("owl-items"),
      margin: $carousel.data("owl-margin"),
      loop: $carousel.data("owl-loop"),
      center: $carousel.data("owl-center"),
      mouseDrag: $carousel.data("owl-mouseDrag"),
      touchDrag: $carousel.data("owl-touchDrag"),
      pullDrag: $carousel.data("owl-pullDrag"),
      freeDrag: $carousel.data("owl-freeDrag"),
      stagePadding: $carousel.data("owl-stagePadding"),
      autoWidth: $carousel.data("owl-autoWidth"),
      startPosition: $carousel.data("owl-startPosition"),
      URLhashListener: $carousel.data("owl-URLhashListener"),
      nav: $carousel.data("owl-nav"),
      rewind: $carousel.data("owl-rewind"),
      navElement: $carousel.data("owl-navElement"),
      slideBy: $carousel.data("owl-slideBy"),
      dots: $carousel.data("owl-dots"),
      dotsEach: $carousel.data("owl-dotsEach"),
      autoplay: $carousel.data("owl-autoplay"),
      autoplayTimeout: $carousel.data("owl-autoplayTimeout"),
      smartSpeed: $carousel.data("owl-smartSpeed"),
      fluidSpeed: $carousel.data("owl-fluidSpeed"),
      autoplaySpeed: $carousel.data("owl-autoplaySpeed"),
      navSpeed: $carousel.data("owl-navSpeed"),
      dotsSpeed: $carousel.data("owl-dotsSpeed"),
      dragEndSpeed: $carousel.data("owl-dragEndSpeed"),
      callback: $carousel.data("owl-callback"),
      video: $carousel.data("owl-video"),
      videoHeight: $carousel.data("owl-videoHeight"),
      videoWidth: $carousel.data("owl-videoWidth"),
      itemElement: $carousel.data("owl-itemElement"),
      stageElement: $carousel.data("owl-stageElement"),
      navContainer: $carousel.data("owl-navContainer"),
      dotsContainer: $carousel.data("owl-dotsContainer")
    }

    var $responsive = {
      responsive: {
        0 : {
          items: $carousel.data("owl-xs")
        },
        // breakpoint from 576px+
        576 : {
          items: $carousel.data("owl-sm")
        },
        // breakpoint from 768px+
        768 : {
          items: $carousel.data("owl-md")
        },
        // breakpoint from 992px+
        992 : {
          items: $carousel.data("owl-lg")
        },
        // breakpoint from 1200px+
        1200 : {
          items: $carousel.data("owl-xl")
        }
      }
    }

    $carousel.owlCarousel( $.extend( $defaults, $options, $responsive) );
  });

  //
  // Home Portfolio Carousel navigation //
  //
  var homePortfolioPrev = $("#homePortfolioPrev");
  var homePortfolioNext = $("#homePortfolioNext");

  homePortfolioNext.on("click", function(){
    $("#homePortfolioSlider").trigger("next.owl.carousel", [300]);
  });
  homePortfolioPrev.on("click", function(){
    $("#homePortfolioSlider").trigger("prev.owl.carousel", [300]);
  });
  


  //
  // Lightbox - Youtube video //
  //
  $(".popup-youtube").each(function() {
    var popupYoutube = $(this);
    var youtubeSrc = popupYoutube.attr("data-youtube-src");

    popupYoutube.magnificPopup({
      items: { src: youtubeSrc },
      type: "iframe",
      fixedContentPos: false,
      removalDelay: 200,
      preloader: false,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: "v=",
            src: youtubeSrc
          }
        },
        srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
  });

  //
  // Lightbox - Vimeo video //
  //
  $(".popup-vimeo").each(function() {
    var popupVimeo = $(this);
    var vimeoSrc = popupVimeo.attr("data-vimeo-src");

    popupVimeo.magnificPopup({
      items: { src: vimeoSrc },
      type: "iframe",
      fixedContentPos: false,
      removalDelay: 200,
      preloader: false,
      iframe: {
        patterns: {
          vimeo: {
            index: "vimeo.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: "/",
            src: vimeoSrc
          }
        },
        srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
  });




});
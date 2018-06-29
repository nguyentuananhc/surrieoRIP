$(document).ready(function () {
  var animation_elements = $.find('.js-animation');
  var web_window = $(window);

  function check_if_in_view() {
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = window_top_position + window_height;
    $.each(animation_elements, function () {
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = element_top_position + element_height;
      if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
        element.removeClass('in-view');
      } else {
        // element.addClass('in-view');
      }
    });
  }

  $(window).on('scroll resize', function () {
    check_if_in_view();
  });
  $(window).trigger('scroll');

  // banner slider
  const bannerSlider = $('.js-banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.js-banner-prev').on('click', function () {
    bannerSlider.slick('slickPrev');
  });
  $('.js-banner-next').on('click', function () {
    bannerSlider.slick('slickNext');
  });

  const mbNav = $('.js-mb-nav');
  $('.js-mb-nav-btn').on('click', function () {
    mbNav.toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  mbNav.on('click', function () {
    $(this).addClass('active');
    $('body').removeClass('no-scroll');
  });
  $('.js-mb-nav-content').on('click', function (e) {
    e.stopPropagation();
  });

  const navbar = $('.js-navbar');
  const navbarPos = navbar.offset().top;
  const scrollTopBtn = $('.js-scroll-top');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > navbarPos) {
      navbar.addClass('is-fixed');
      scrollTopBtn.addClass('is-show');
    } else {
      navbar.removeClass('is-fixed');
      scrollTopBtn.removeClass('is-show');
    }
  });

  // search btn click
  const searchBtn = $('.js-search-btn');
  const search = $('.js-search');
  const searchGroup = $('.js-search-group');
  const searchClose = $('.js-search-close');
  searchBtn.on('click', function () {
    search.addClass('is-show');
    $('.js-search-input').focus();
    $('body').addClass('no-scroll');
  });
  searchClose.on('click', function () {
    search.removeClass('is-show');
    $('body').removeClass('no-scroll');
  });
  searchGroup.on('click', function (e) {
    e.stopPropagation();
  });

  // scrolltop
  scrollTopBtn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  // news slider
  const newsSlider = $('.js-news-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.js-news-slider-prev').on('click', function () {
    newsSlider.slick('slickPrev');
  });
  $('.js-news-slider-next').on('click', function () {
    newsSlider.slick('slickNext');
  });

  // sync slider testimonial
  $('.js-sync1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-sync2'
  });
  $('.js-sync2').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.js-sync1',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
$(window).on('load', function () {
    $('.nav_bar').click(function () {
        $('.navigation').addClass('navigation-active animated fadeInRight faster');
        $('.main-container').addClass('main-container__active');
    });
    $('.main-container, .close-side-widget').click(function () {
        $('.navigation').removeClass('navigation-active');
        $('.main-container').removeClass('main-container__active');
    });
    
    // Hide displayed paragraphs
    $(".search-btn").click(function () {
        $('.search-input').addClass('animated fadeInDownBig faster').css({ 'display': 'block' }).focus();
        $('.search-input__close').addClass('animated zoomIn fast').css({ 'display': 'block' });
    });
    $(".search-input__close").click(function () {
        $('.search-input').slideUp();
        $('.search-input__close').slideUp();
    });

    $(".cart-btn, .cart-btn__add").click(function () {
        $('.cart-wrap__shower').css({ 'display': 'block' });
        $('.cart-wrap').addClass('animated fadeInRight faster').css({ 'display': 'block' });
    });

    $('.close-side-widget, .cart-wrap__shower').click(function () {
        $('.cart-wrap__shower').fadeOut(100);
        $('.cart-wrap').fadeOut(100);
    });

    $(".svg-formater").hover(function () {
        $(this).addClass('animated rotateIn faster');
    });

    $(".svg-formater").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass('animated rotateIn faster');
    });

    $('.show-sidebar-buttom').click(function () {
        $('.left-sidebar').addClass('navigation-active animated fadeInLeft faster').css({ 'display': 'block' });
        $('.main-container').addClass('main-container__active');
    });

    $(window).resize(function () {
        if ($(window).width() < 1060) {
            $('.sidebar-container').remove();
        }
    });

    $('.main-container').click(function () {
        $('.left-sidebar').removeClass('navigation-active animated fadeInLeft faster').css({ 'display': 'none' });

    });

    $('.product-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.product-slider-miniator',
        rows: 0,
        swipe: false
    }).css({ 'display': 'block' });

    $('.product-slider-miniator').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow: '<button><img class="svg-formater" src="img/all-icons/left-arrow.svg" alt=""/></button>',
        nextArrow: '<button><img class="svg-formater" src="img/all-icons/arrows.svg" alt=""/></button>',
        rows: 0,
        asNavFor: '.product-slider'
    });


    $('.product-slider__item').zoom();

    $('.related-products__slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        prevArrow: '<button class="best-seller__left-arrow"><img class="svg-formater" src="img/all-icons/related-arrow-left.svg" alt=""/></button>',
        nextArrow: '<button class="best-seller__right-arrow"><img class="svg-formater" src="img/all-icons/related-arrow-right.svg" alt=""/></button>',
        rows: 0,
        responsive: [
            {
                breakpoint: 886,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.clients').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        nextArrow: true,
        arrows: false,
        autoplay: true,
        rows: 0,
        responsive: [
            {
                breakpoint: 947,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.slider-wrap__container').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        touchThreshold: 100
    });


    var myElement = document.querySelector(".headroom");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);``
    // initialise
    headroom.init();




    $('.product-slider__item').imagesLoaded()
        .always(function (instance) {
            console.log('all images loaded');
        })
        .done(function (instance) {
            console.log('all images successfully loaded');
        })
        .fail(function () {
            console.log('all images loaded, at least one is broken');
        })
        .progress(function (instance, image) {
            var result = image.isLoaded ? 'loaded' : 'broken';
            console.log('image is ' + result + ' for ' + image.img.src);
        });




});

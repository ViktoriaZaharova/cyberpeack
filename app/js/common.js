$('.partners-company-slider').slick({
    slidesToShow: 8,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// прогрессбар для слайдера
$(document).ready(function () {
    function setProgress(index) {
        const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

        $progressBar
            .css('width', calc + '%')
            .attr('aria-valuenow', calc);

    }

    const $slider = $('.partners-company-slider');
    const $progressBar = $('.progress-bg1');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);
    });

    setProgress(0);
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end


$(window).on('load resize', function () {
    if ($(window).width() > 992) {
        $(".risks-wrapper").mCustomScrollbar({
            axis:"y"
        });
    } else {
        $(".risks-wrapper").mCustomScrollbar({
            axis:"x"
        });
    }


    if ($(window).width() < 768) {
        $(".why-important-wrapper").mCustomScrollbar({
            axis:"x"
        });

        $('.reviews-slider:not(.slick-initialized)').slick({
            dots: true,
            slidesToShow: 1,
            arrows: false,
            fade: true
        });

    }
    else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 576) {

        $('.press-center-slider:not(.slick-initialized)').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true
        });
    }
    else {
        $(".press-center-slider.slick-initialized").slick("unslick");
    }
});





$('.task-slider-image1').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content1'
});

$('.task-slider-content1').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav1',
    asNavFor: '.task-slider-image1',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav1 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});


$('.task-slider-image2').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content2'
});

$('.task-slider-content2').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav2',
    asNavFor: '.task-slider-image2',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav2 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});


$('.task-slider-image3').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content3'
});

$('.task-slider-content3').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav3',
    asNavFor: '.task-slider-image3',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav3 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});

$('.task-slider-image4').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content4'
});

$('.task-slider-content4').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav4',
    asNavFor: '.task-slider-image4',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav4 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});

$('.task-slider-image5').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content5'
});

$('.task-slider-content5').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav5',
    asNavFor: '.task-slider-image5',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav5 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});

$('.task-slider-image6').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.task-slider-content6'
});

$('.task-slider-content6').slick({
    slidesToShow: 1,
    fade: true,
    appendArrows: '.task-slider-nav6',
    asNavFor: '.task-slider-image6',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    dots: true,
    appendDots: '.task-slider-nav6 .counter-slide',
    customPaging: function (slider, i) {
        var current = i + 1;
        current = current < 10 ? +current : current;

        var total = slider.slideCount;
        total = total < 10 ? +total : total;

        return (
            '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            <span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
        );
    }
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').slick('setPosition');
});


$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeIn();
});

$('.mobile-menu__close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

new WOW().init();
$('[name="phone"]').mask('+7(999) 999-99-99');

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

$(".risks-wrapper").mCustomScrollbar({
    axis: "yx",
});

$(window).on('load resize', function () {

    if ($(window).width() < 768) {
        $(".why-important-wrapper").mCustomScrollbar({
            axis: "x"
        });

        $('.reviews-slider:not(.slick-initialized)').slick({
            dots: true,
            slidesToShow: 1,
            arrows: false,
            fade: true
        });

        $('.optimization-wrapper:not(.slick-initialized)').slick({
            slidesToShow: 2,
            arrows: true,
            vertical: false,
            appendArrows: '.optimization-wrapper__nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
        $(".optimization-wrapper.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 576) {
        $('.press-center-slider:not(.slick-initialized)').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true
        });
        $('.projects-slider:not(.slick-initialized)').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true,
        });


    } else {
        $(".press-center-slider.slick-initialized").slick("unslick");
        $(".projects-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() > 576) {
        $('.blog-slider').slick({
            slidesToShow: 1,
            variableWidth: true,
            appendArrows: '.blog-slider-nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });
        $('.publication-slider').slick({
            slidesToShow: 1,
            variableWidth: true,
            appendArrows: '.publication-slider-nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });

        $('.events-slider-v2').slick({
            slidesToShow: 1,
            variableWidth: true,
            appendArrows: '.events-slider-nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });

        $('.partners-slider1').slick({
            slidesToShow: 4,
            infinite: false,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
        });

    } else {
        $(".blog-slider.slick-initialized").slick("unslick");
        $(".publication-slider.slick-initialized").slick("unslick");
        $(".events-slider-v2.slick-initialized").slick("unslick");
        $(".partners-slider1.slick-initialized").slick("unslick");
    }
});

$('.description-module-audit-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.spectrum-protect-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
});


$('.information-module-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.partners-slider2').slick({
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
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

$('.calendar-events-slider').slick({
    slidesToShow: 1,
    infinite: false,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.events-slider-v1').slick({
    slidesToShow: 1,
    variableWidth: true,
    appendArrows: '.events-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                appendArrows: '.events-slider-v1',
                infinite: false,
            }
        }
    ]
});


$('.news-slider1').slick({
    slidesToShow: 1,
    variableWidth: true,
    appendArrows: '.news-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
});


$('.news-slider2').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true
            }
        }
    ]
});

$('.gallery-corporate-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
            }
        }
    ]
});

$('.reports-slider').slick({
    slidesToShow: 2,
    variableWidth: true,
    appendArrows: '.reports-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.solution-slider').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                variableWidth: true,
                slidesToShow: 1,
            }
        }
    ]
});

$('.team-slider').slick({
    slidesToShow: 4,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.demand-product-slider').slick({
    slidesToShow: 4,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});

$('.licenses-slider').slick({
    slidesToShow: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    fade: true,
    responsive: [

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
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


$('.btn-toggle-list').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.partners-row').find('ul').fadeIn();
    $(this).fadeOut();
});

$('.btn-view-text').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.partners-row').find('.box-text-hidden').addClass('open');
    $(this).fadeOut();
});


new WOW().init();
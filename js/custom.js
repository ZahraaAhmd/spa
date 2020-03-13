/*** services slider */
$('.services-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        autoDelay: 3000,
        minSlides: 1,
        maxSlides: 1,
        pager: true,
        pagerType: "short",
        pagerSelector: "#id_pager",
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        captions: true
    });
});
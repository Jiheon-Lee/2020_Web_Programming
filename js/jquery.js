$(function () {
    var hdr = $('header');
    var start = $('.search-box');
    var startOffsetTop = start.offset().top;
    $(window).resize(function () {
        startOffsetTop = start.offset().top;
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= startOffsetTop) {
            hdr.addClass('down');
        } else {
            hdr.removeClass('down');
        }
    });
});

// Scrollspy

$(document).ready(function() {

    var scrollLink = $('.nav-link');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        console.log(scrollbarLocation);

        scrollLink.each(function() {
            var scrolltop = $(this.hash).position().top - 20;
            var sectionOffset = scrolltop;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})






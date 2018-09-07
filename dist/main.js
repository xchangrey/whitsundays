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
            var scrolltop = $(this.hash).position().top;
            var sectionOffset = scrolltop;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})


// $(document).ready(function() {
//     //Smooth scrolling when click to nav
//     $('.nav-link').click(function(e) {
//         e.preventDefault();
//         var curLink = $(this);
//         var scrollPoint = $(curLink.attr('href')).position().top;
//         $('body,html').animate({
//             scrollTop: scrollPoint
//         }, 600);
//     })

//     $(window).scroll(function() {
//         onScrollHandle();
//     });

//     function onScrollHandle() {

//         //Get current scroll position
//         var currentScrollPos = $(document).scrollTop();

//         //Iterate through all node
//         $('a.nav-link').each(function() {
//             var curLink = $(this);
//             var refElem = $(curLink.attr('href'));
//             //Compare the value of current position and the every section position in each scroll
//             if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
//                 //Remove class active in all nav
//                 $('.menu-item').removeClass("active");
//                 //Add class active
//                 curLink.parent().addClass("active");
//             }
//             else {
//                 curLink.parent().removeClass("active");
//             }
//         });
//     }
// });





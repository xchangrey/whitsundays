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

        scrollLink.each(function() {
            var scrolltop = $(this.hash).position().top - 20;
            var sectionOffset = scrolltop;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })


    //Tabbed content
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
    })
    
    // Nav Collapse 

    $(".menu-btn").click(function(){
        $('.menu').toggle(500);
        scrollLink.click(function(){
            $('.menu').hide();
        })
	})

})










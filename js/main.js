$(window).on('resize', function(){
    var widthValue = jQuery(window).width();
    var heightValue = jQuery(window).height();
    jQuery(".statusWidth").html(widthValue);
    jQuery(".statusHeight").html(heightValue);
});


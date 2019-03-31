// Projects Shuffle
$(document).ready(function(){
  $('.projects ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all' ) {
        $('.shuffle-images .col-sm').css( 'opacity' , 1 );
    } else {
        $('.shuffle-images .col-sm').css( 'opacity' , '.08' );
        $($(this).data('class')).parent().css('opacity' , 1)
    }
});  
    
// HumborgerIcon
$('#humborgerIcon').click(function(){
  
$('#navbarMenu').toggleClass("show");
})
});



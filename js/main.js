$(document).ready(function(){
    $('.banner_wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows:false,
      });

    $('.hamburger').on('click',function(){
        $(this).toggleClass('is-active')
        $('.header_wrap').slideToggle('fast')
    })
    
});
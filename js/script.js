$(function () {
    
    $('.bn_slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:'.prev_arrow',
        nextArrow:'.nxt_arrow',
        dotsClass:'.bn_dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        
        ]
    });

    $(document).ready(function(){
        $('.venobox').venobox({
            spinner: 'three-bounce'
        }); 
        
    });

    $('.carousel').carousel({
        interval: 1500
      })



    
})











var video= document.querySelector('.video');
var butn= document.getElementById('.pause-play');

function toggleplaypause() {
    if (video.paused) {
        butn.className('play');
        
        video.play;
    }
    else {
        butn.className('pause');
        video.pause;
    }

}

butn.onclick = function(){
    toggleplaypause();
}















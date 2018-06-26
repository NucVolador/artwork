(function(){
    var switchClick = false;
    $('.nav-hover').click(function(){
        if(switchClick){
            $(this).removeClass('open')
            switchClick = false;
        }else
        {
            $(this).addClass('open')
            switchClick = true;
        }
    });
})();
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
})
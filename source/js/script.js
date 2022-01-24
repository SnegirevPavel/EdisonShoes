$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});

$(document).ready(function(){
    $('.hide__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


// Кнопка наверх----------

jQuery(($) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 780) $('.to-up').fadeIn();
        else $('.to-up').fadeOut();
    });
    $('.to-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 566);
        return false;
    });
});
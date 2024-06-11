$(document).ready(() => {
    $('#header-burger').click(toggleMenu);

    function toggleMenu() {
        $('#header-burger').toggleClass('header__burger_active');
        $('#header-mobile-menu').toggleClass('header-mobile-menu_active');
        $('body').toggleClass('header-menu-opened');
    }
});

$(document).ready(() => {
    $('.sidebar__links a').click(function (event) {
        event.preventDefault();

        $('.sidebar__links a').each((i, el) => {
            $(el).removeClass('active');
        });
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);

        $(this).addClass('active');
    });
});
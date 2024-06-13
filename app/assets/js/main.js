$(document).ready(() => {
    $('.bodybg').click((e) => {
        closeMenu();
        closeCart();
        closeMiniMenu();
    });
});

$(document).ready(() => {
    $(".header__burger").click(toggleMenu);
});


// Прокрутка сайтбара
$(document).ready(() => {
    $(".sidebar__links a").click(function (event) {
        event.preventDefault();

        $(".sidebar__links a").each((i, el) => {
            $(el).removeClass("active");
        });

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500
        );

        $(this).addClass("active");
    });
});


// Слайдер в корзине
$(document).ready(function () {
    new Swiper(".modal-cart__more-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: "#cart-slider-right",
            prevEl: "#cart-slider-left",
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            376: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            578: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

    $("#open-cart, .fix-menu__item-cart").click(openCart);
    $(".fix-menu__item-menu").click(openMiniMenu);
    $("#close-cart").click(closeCart);
});

// Тоглирование меню
function toggleMenu() {
    $(".header__burger").toggleClass("header__burger_active");
    $("#header-mobile-menu").toggleClass("header-mobile-menu_active");
    $("body").toggleClass("header-menu-opened");
}
// Открыть меню
function openMenu() {
    $(".header__burger").addClass("header__burger_active");
    $("#header-mobile-menu").addClass("header-mobile-menu_active");
    $("body").addClass("header-menu-opened");
}
// Закрыть меню
function closeMenu() {
    $(".header__burger").removeClass("header__burger_active");
    $("#header-mobile-menu").removeClass("header-mobile-menu_active");
    $("body").removeClass("header-menu-opened");
}


// Открыть корзину
function openCart() {
    $(".modal-cart").addClass("modal-cart_active");
    $("body").addClass("header-menu-opened");
}

// Закрыть корзину
function closeCart() {
    $(".modal-cart").removeClass("modal-cart_active");
    $("body").removeClass("header-menu-opened");
}




// Открыть мини меню
function openMiniMenu() {
    $(".fix-menu__item-menu").addClass("fix-menu__item_active");
    $("body").addClass("header-menu-opened");
}

// Закрыть мини меню
function closeMiniMenu() {
    $(".fix-menu__item-menu").removeClass("fix-menu__item_active");
    $("body").removeClass("header-menu-opened");
}


$(document).ready(() => {
    $('.mini-menu a').click(function(e) {
        e.preventDefault();
        closeMiniMenu();
    });
});
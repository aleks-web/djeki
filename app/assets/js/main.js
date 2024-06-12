$(document).ready(() => {
    $("#header-burger").click(toggleMenu);

    function toggleMenu() {
        $("#header-burger").toggleClass("header__burger_active");
        $("#header-mobile-menu").toggleClass("header-mobile-menu_active");
        $("body").toggleClass("header-menu-opened");
    }
});

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

    $("#open-cart").click(openCart);
    $("#close-cart").click(closeCart);

    function openCart() {
        $(".modal-cart").addClass("modal-cart_active");
        $("body").addClass("header-menu-opened");
    }

    function closeCart() {
        $(".modal-cart").removeClass("modal-cart_active");
        $("body").removeClass("header-menu-opened");
    }
});

$(document).ready(function () {


    /* Завдання 1 */
    $('.slide-text h1').fadeOut(2000);
    $('.slide-text h1').fadeIn(3000);

    /* Завдання 2 */
    $(".head-moto-img").fadeTo('slow', 0.05);
    $(".head-moto-img").fadeTo(7000, 1);

    /* Завдання 3 */
    $('.head').slideUp(2000);
    $('.head').slideDown(1000);

    /* Завдання 4 */
    $('.blog-post').fadeOut(1500)         /* непрозорість зменшитись за 1500 */
    $('.blog-time-line').slideUp(2000)    /* згорнутися за 2000 */
    $('.blog-time-line').slideDown(3000)  /* розгорнутися за 3000 */
    $('.blog-post').fadeIn(6000)          /* непрозорість збільшитись за 6000 */

    /* Завдання 5 */
    function zr(name_obj, t1, t2) {
        obj = $(name_obj);
        t1 = t1;
        t2 = t2;
        obj.slideUp(t1);
        obj.slideDown(t2)
    }

    /*    zr('#my_form', 2000, 1000) */


    /* Завдання 6 */
    function prozor(name_obj, time, opacity) {
        obj = $(name_obj);
        time = time;
        opacity = opacity;
        obj.fadeTo(time, opacity);
        obj.slideUp(time);
        obj.slideDown(time);
        obj.fadeTo(time, 1);
    }

    /*  prozor('.slide-btn', 2000, 0.3) */

    /* Завдання 7 */
    $("ul.top-nav").slideUp(2000, function () {
        /*  alert('Меню було сховано'); */
    })

    /* Завдання 8 */
    $('.slide-text').slideUp(2000, function () {
        zr('#my_form', 2000, 1000);
        prozor('.slide-btn', 2000, 0.3);
        $('.slide-text').slideDown(2000);
    })
})

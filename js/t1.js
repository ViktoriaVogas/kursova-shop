$(document).ready(function () {
    //Завдання 1
    /*   alert( $("h1").text() ) */

    //Завдання 2

    /*   alert($(".link-moto").text()); */

    //Завдання 3

    $(".slide-btn").hide();

    //Завдання 4
    $(".features-grid p").hide(3000);

    //Завдання 5
    $(".categorie").show(2000);

    //Завдання 6
    /*  alert($("ul.top-nav>li").text()) */

    //Завдання 7
    $(".slide-text>h1+span").hide(3500);
    $(".slide-text>h1+span").show(2000);

    //Завдання 8
    $('h3>span').hide(1000);
    $('h3>span').show(2000);

    //Завдання 9
    /* alert($(".blog-post-info>span>a").text()) */

    //Завдання 10
    /* alert($(".blog-post-date>span>label").text()) */

    //Завдання 11
    alert( $(".blog-post-info>span+h4").text());

    //Завдання 12
    $('img[src*=logo]').hide(3000);
})
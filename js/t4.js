$(document).ready(function () {

    /* НОВІ МЕТОДИ:
        .html()   .val()   .attr()
    */

    //Завдання1
    /*  
     $("li").click(function () {
         alert($(this).html())
     }) 
     */
    //Завдання2
    /*  alert( $("#email").val()) */
    //Завдання3
    $(".link-moto").click(function () {
        // alert($(this).attr('href'))
    })

    //Завдання4
    $('.head-moto-img').click(function () {
        //alert($(this).attr('src'))
    })

    //Завдання5
    $("#p").click(function () {
        $(this).html("<i>Зараз функція недоступна. <br>  Спробуйте пізніше</i>")
    })

    //Завдання6
    $(".slide-text").click(function () {
        $('.m6').html('<img src="images/pic_eng.png" alt="" width="50">')
    })


    $(".contatct-active").click(function () {
        if ($('.m6>a').text() == 'eng') {
            $('.m1>a').text('Home');
            $('.m2>a').text('Motorcycles');
            $('.m3>a').text('Sale');
            $('.m4>a').text('Forum');
            $('.m5>a').text('Contacts');
            $('.m6>a').text('ua');
        } else {
            $('.m1>a').text('Головна');
            $('.m2>a').text('Мотоцикли');
            $('.m3>a').text('Розпродаж');
            $('.m4>a').text('Форум');
            $('.m5>a').text('Контакти');
            $('.m6>a').text('eng');
        }
    })

    //Завдання 7-8
    var obranuy = false;
    $('.head-moto-img').click(function () {

        if (!obranuy) {
            $('+h3>a', this).html(function (i, origText) {
                return "<em>Ви обрали: </em><br> <br>" + origText;
            });
            obranuy = true;
        }

    })

    //Завдання 9
    var count = 0;
    $('.blog-post-date').hover(
        function () {
            $('+.blog-post-info>.categorie', this).text(function (i, origText) {
                if (count == 0) {
                    count = 1;
                    return "Бажаєте замовити ? " + origText;
                }
            });
            $('+.blog-post-info>.categorie', this).fadeIn(1000)
        },
        function () {
            $('+.blog-post-info>.categorie', this).fadeOut(1000)
        }
    )
    //Завдання 10
    $('.blog-post-date').click(function () {
        var obj = this;
        $('#mytextarea').text(function (i, origText) {
            return origText + $('+.blog-post-info>h4', obj).text()
                    + " " + 
                    $('+.blog-post-info>.categorie', obj).text()
                    +"\n";
        })
        
    })


})
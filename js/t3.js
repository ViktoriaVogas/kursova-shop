$(document).ready(function () {

    //Завдання 1
    /*    $('.slide-btn').click(function () {
           alert('Була натиснута кнопка з класом slide-btn')
       }) */

    //Завдання 2-3
    /* $(".features-grids").click(function(){
        $(".head-moto-img").slideToggle(3000);
    }) */
    //Завдання 4
    $(".head-moto-img").click(function () {
        $(this).fadeToggle(2000)
    })
    /* 20.01.2024 */
    //Завдання 5
    /*   $(".header").mouseenter(function () {
          $('.slide-text').slideUp(2000);
      })
      $(".header").mouseleave(function () {
          $('.slide-text').slideDown(2000);
      })
   */

    //Завдання 6
    $('.slide-btn').click(function () {
        $(this).text("Оберіть мотоцикл нище на сторінці")
    })

    //Завдання 7-8
    let text1 = 'Подивитись фото';
    let text2 = 'Сховати фото'

    $('#p').click(function () {
        $(".head-moto-img").slideToggle(2000);

        if ($('#p').text() != text1) {
            $('#p').text(text1)
        } else {
            $('#p').text(text2)
        }

    })

    //Завдання 9
    $('.blog-post-date').hover(
        function () {
            $("+.blog-post-info>.categorie", this).fadeIn();
        },
        function () {
            $("+.blog-post-info>.categorie", this).fadeOut();
        }
    )

    //Завдання 10
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

    

})
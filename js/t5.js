$(document).ready(function () {
    /* Нові методи - тема 5*/
    // .addClass('тут назва класу')  --- додає новий клас до обраного елементу
    // .prepend() --- додає щось у блок  перед тим текстом, що знаходиться у ньому
    // .append() ---  додає щось у блок  після того тексту, що знаходиться у ньому
    // .before() ---  додає щось перед блоком
    // .after() ---   додає щось після блоку
    // .toggleClass('тут назва класу') --- додає або якщо вже є то забирає  клас до обраного елементу
    // .clone()  --- клонує певний елемент
    // .remove()  --- видаляє елемент

    /* Завдання 1 */
    $('#about-moto').addClass('new');

    /* Завдання 2 */
    $('#about-moto').prepend('<p class="fon_yellow">Цей абзац доданий за допомогою методу prepend</p>')
    $('#about-moto').append('<p class="fon_yellow">Цей абзац доданий за допомогою методу append</p>')
    $('#about-moto').before('<p class="fon_yellow">Цей абзац доданий за допомогою методу before</p>')
    $('#about-moto').after('<p class="fon_yellow">Цей абзац доданий за допомогою методу after</p>')

    /* Завдання 3 */
    $('li').hover(
        function () {
            $(this).toggleClass('svitlo')
        }
    )
    /* Завдання 4 */
//    $('.head-moto-img').click(function(){
//       $(this).clone().prependTo('.koshik-wrapper'); //клонуємо картинку та додаємо її у кошик
//        $(this).remove(); //видаляємо фото мотоцикла зверху 
//        $('.koshik-wrapper').addClass('full-koshik'); //додаємо до кошика клас, який робить його зеленим
//    })

    /* Завдання 6 */
    $('.head-moto-img').click(function(){
        let moto = $(this);

        $('.koshik-wrapper-items').each(
            function(){
                if(moto.attr('nomer') == $(this).attr('nomer'))
                {
                    $(this).html(moto.clone().dblclick(function(){
                        $(this).remove();
                        rahunok();
                    }));
                    moto.remove();
                 /*    $('.koshik-wrapper').addClass('full-koshik'); */
                }
            }
        );
        rahunok();
    });
    function rahunok(){
        let count = 0;
        let suma = 0;
        $('.koshik-wrapper-items>.head-moto-img').each(
            function(){
                count++;
                suma= suma+ parseInt($(this).attr('price'));
            }
        )

        $("#suma").html("Всього <b>"+count+"</b> мотоциклів на суму <b>"+suma+"</b> грн");
        if(count>0){
            $('.koshik-wrapper').addClass('full-koshik');
        } else {
            $('.koshik-wrapper').removeClass('full-koshik');
        }
    }





})
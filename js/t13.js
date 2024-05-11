$(document).ready(function(){

    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    })

    $("#my_button").on('click',function(event){
        event.preventDefault();
        //створюємо змінну з умовами які вибрав користувач
        let umovu = '';
        //додаємо до змінної пункти кнопки які обрав користувач
        if ( $("input[type='checkbox']").eq(0).prop('checked') == true ) {
            umovu += 'Шолом: так <br>';
        }
        if ( $("input[type='checkbox']").eq(1).prop('checked') == true ) {
            umovu += 'Багажник: так <br>';
        }
        if ( $("input[type='checkbox']").eq(2).prop('checked') == true ) {
            umovu += 'Мото-одяг: так <br>';
        }
        //перевірка чи обрала людина страховку
        if ($('#inch_yes').prop('checked') == true){
            umovu += 'Страхування: так <br>';
        } else {
            umovu += 'Страхування: ні <br>';
        }
        //задаємо всі обрані пункти в вікно
        $("#dialog").html(
            $('#motoSelect option:selected').text()+"<br>"+
            $("#custom-handle").text()+" мотоциклів "+"<br>"+
            " На такі дні:  з " + $("#from").val() + " до " + $("#to").val() + "<br>" +
            "Запланована відстань: "+$('#amount').val()+"<br>"+
            "Область: "+$("#tags").val()+"<br>"+ umovu
        )

        //Перевірити чи людина пройшла опитування, якщо пройшла то показати вікно, якщо ні то вивести повідомлення
        let prog_value = $("#progressbar").progressbar("value");
        if (prog_value < 100){
            alert("Вам потрібно заповнити анкетування")
        } else {
            $("#dialog").dialog("open");
        }


    })


    $('#menu').dmenu();
    

})
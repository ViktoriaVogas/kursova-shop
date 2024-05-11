$(document).ready(function(){

    /* Завдання 1 */
    var handle = $('#custom-handle')
    $('#slider').slider({
        min: 1,
        max: 10,
        create: function(){
            handle.text( $(this).slider('value') )
        },
        slide: function(event, ui){
            handle.text(ui.value)
            $('#mytextarea').text(ui.value+" мотоциклів")
        }
    })

    /* Завдання 2 */
    var dataFormat = 'mm/dd/yy',
        from = $('#from')
                .datepicker({
                    defaultDate: '+1w',
                    changeMonth: true,
                    numberOfMonths:1
                })
                .on('change',function(){
                    to.datepicker('option','minDate', getDate(this) )
                }),
        to = $('#to')
                .datepicker({
                    defaultDate: '+1w',
                    changeMonth: true,
                    numberOfMonths:1
                })
                .on('change',function(){
                    from.datepicker('option','maxDate', getDate(this) )
                })

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dataFormat, element.value)
        } catch (error) {
            date = null;
        }
        return date
    }

    /* Завдання 3 */
    var days = 0;
    to.change(function(){
        var Date1 = new Date ($('.datepicker:first').val());
        var Date2 = new Date ($('.datepicker:last').val());
        days =  Math.floor(((Date2.getTime() - Date1.getTime())/(1000*60*60*24))+1)
        $('#mytextarea').text(function(i, origText){
            return days + " днів " + "\n" + origText
        })
    })

    /* Завдання 4 */
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 1000,
        values: [50,400],
        slide: function(event, ui){
            $('#amount').val(ui.values[0] + ' - ' + ui.values[1] + ' км')
        }
    });
    $('#amount').val(
        $("#slider-range").slider('values',0) + ' - ' 
                + $("#slider-range").slider('values',1) + ' км'
        )


/* ДЗ */
        
//////////////////
    $('#mytextarea').text(function(i, origText){
         return $('#amount').val() + " кілометрів " + "\n" + origText
    })


    /* ПРОДОВЖЕННЯ КОДУ 16 березня */

    $('#progressbar').progressbar({ 
        value: 0
    }) ;
    $('#oput [id^="radio"]').change(function(){
        /* щоб при виборі пунктів заповнювався прогресс бар */
        var chRadio = $(
            '[name="posv"]:checked,[name="dosv"]:checked,[name="speed"]:checked,[name="fam"]:checked,[name="sigur"]:checked'
          ).length;

        $("#progressbar").progressbar({ value: chRadio * 20 }).hide().fadeIn(500);

        /* щоб при виборі пунктів змінювався текст */
        var questQunt = $('#oput [id^="radio"]').length;
        $("#aswerCount").text("Дано відповідей " + chRadio + " із " + questQunt);    
        
    })

    $('#progressbar').bind('progressbarchange', function(event, ui){
        var selector = '#'+this.id+" > div";
        var value = this.getAttribute("aria-valuenow");

        if (value < 25){
            $(selector).css({background: "#FF0000"})
        } else if ( value >= 35 && value < 45) {
            $(selector).css({ background: "#FF5900" });
        } else if (value >= 55 && value < 65) {
            $(selector).css({ background: "#FFA200" });
        } else if (value >= 75 && value < 85) {
            $(selector).css({ background: "#BFFF00" });
        } else if ((value = 100)) {
            $(selector).css({ background: "#66FF00"});
        }
    })

    /* Тема 12 завдання 7 */
    var oblasti = [
        "Вінницька", "Волинська", "Дніпропетровська","Донецька","Житомирська","Закарпатська", "Запорізька","Івано-Франківська", "Київська","Кіровоградська","Луганська", "Львівська", "Миколаївська", "Одеська","Полтавська", "Рівненська","Сумська","Тернопільська",
        "Харківська","Херсонська","Хмельницька","Черкаська","Чернівецька","Чернігівська"
      ];

    $('#tags').autocomplete({
        source: function(request, response) {
            var term = request.term.toLowerCase(); // Перетворення введеного терміну на малий регістр
      
            var filteredOblasti = $.grep(oblasti, function(oblast) {
              return oblast.toLowerCase().startsWith(term); // Порівняння з першою буквою області
            });
      
            response(filteredOblasti);
          }
    })





    
})
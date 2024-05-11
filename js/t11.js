$(document).ready(function(){

var circle = $("#circle")
$("#radius").selectmenu({
    change: function(event, data){
        circle.css({
            width: data.item.value,
            height: data.item.value
        })
    }
});
$("#color").selectmenu({
    change: function(event, data){
        circle.css({
            background: data.item.value
        })
    }
})

$("#shlem .container").hide();
$('#innerfieldset').click(function(){
    if (  $('input[type="checkbox"]').eq(0).prop("checked")  ) {
        $("#shlem .container").slideDown();
    } else {
        $("#shlem .container").slideUp();
    }
})

})
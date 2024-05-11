$(document).ready(function(){
    /* Нові методи - тема 6*/
    //  height() --- змінює -ВИСОТУ- вибраного елемента
    //  width() ---  змінює -ШИРИНУ- вибраного елемента


/*ЗАВДАНЯ 1 */
/* $(".slide-btn").height(100); */
/* $(".slide-btn").width(200); */

/* ЗАВДАННЯ 2 та 3 */
function change_width(selectorObj ,w){
   let oldW = $(selectorObj).width();
   let rizn = w - oldW;
   $(selectorObj).width(w).height($(selectorObj).height()+rizn)
 }

/* change_width(".head-moto-img", 250) */
/* change_width(".slide-btn", 200) */

/* ЗАВДАННЯ 4 */

function change_width_height_min (selectorObj) {
    var width = $(selectorObj).width();
    var height = $(selectorObj).height();
    $(selectorObj).width(width/2).height(height/2); 
}

change_width_height_min(".head-moto-img")


function change_width_height_max (selectorObj) {
    var width = $(selectorObj).width();
    var height = $(selectorObj).height();
    $(selectorObj).width(width*2).height(height*2); 
}

change_width_height_max(".link-moto")







})
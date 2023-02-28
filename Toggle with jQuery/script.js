

$('#para1').hide();  // hide para 1 first

$('#para1').html('Welcome'); //dom object return

/*
    function $(query){
        return document.querySelector(query);
    }
*/


$('#para1').width(100);

// function toogleFunc() {
//     $(document.body).toggleClass(".dark-mode");
// }

$(document).ready(function(){
    $(".slider").click(function(){
        $(document.body).toggleClass("dark-mode");
    });
});


// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }


// Using $ function which has collection of elements.
// (O) it returns jQuery objects
// [O] it returns DOM objects
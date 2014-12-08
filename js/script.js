$(document).ready(function(){
    $('nav').mouseenter(function (){
        $('nav').fadeTo('slow', 1);
    });

    $('nav').mouseleave(function (){
        $('nav').fadeTo('slow', 0);
    });
});
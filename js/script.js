$(document).ready(function(){
    $('nav').mouseenter(function (){
        $('nav').fadeTo('fast', 1);
    });

    $('nav').mouseleave(function (){
        $('nav').fadeTo('fast', 0.8);
    });
});


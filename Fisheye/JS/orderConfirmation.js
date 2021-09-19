// Using jQuery to provide functionality to both the "Subscribe" and "Close" button. Toggle will act like a switch between displaying none and displaying show.

$(function(){
    $('.ModalButton').on('click',function(){
        $('.Modal').toggle();
        $('.ModalBackground').toggle();
    });
});
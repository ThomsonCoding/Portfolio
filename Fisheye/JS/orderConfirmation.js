// Able to use this to show the selected div, simply add onclick="showDiv('DivsID')" to the HTML property.  

function showDiv(ID) {
    document.getElementById(ID).style.display = "block";
 }

// Able to use this to hide the selected div, simply add onclick="showDiv('DivsID')" to the HTML property.  

 function hideDiv(ID) {
    document.getElementById(ID).style.display = "none";
 }

 

// Using jQuery to provide functionality to both the "Subscribe" and "Close" button. Toggle will act like a switch between displaying none and displaying show.

// $(function(){
//     $('.ModalButton').on('click',function(){
//         $('.Modal').toggle();
//         $('.ModalBackground').toggle();
//     });
// });
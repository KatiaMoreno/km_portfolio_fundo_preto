// jQuery code to show the working of this method 
$(document).ready(function () {
    $("button").click(function () {
        $(document).scrollTop($(document).height());
    });
});

var broken = false
function workLamp(tipo) {
    if(!broken){
        document.getElementById("luz").src = "images/lamp/" + tipo + ".png"
       if (tipo == 'lampada-quebrada-removebg-preview'){
        quebrada = true
       }
    }
}
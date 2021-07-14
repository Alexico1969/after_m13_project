function convertF2C(){
    var input = $('#fahrenheit').val();
    var output = (input - 32) * 5/9;
    $("#celcius").html(output.toFixed(1));
}

function convertC2F(){
    var input = $('#celcius_input').val();
    var output = (input * 1.8) + 32 ;
    $("#fahrenheit_output").html(output.toFixed(1));
}


$(document).ready(function () {
    $("#convert").click(convertF2C);
    $("#convert2").click(convertC2F);
});






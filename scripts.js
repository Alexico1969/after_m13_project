function convertF2C(){
    var input = $('#fahrenheit').val();
    var output = (input - 32) * 5/9;
    $("#celsius").html(output.toFixed(1));
}

function convertC2F(){
    var input = $('#celsius_input').val();
    var output = (input * 1.8) + 32 ;
    $("#fahrenheit_output").html(output.toFixed(1));
}

function calculate(){
    var input = $('#calc_input').val();
    var output =eval(input);
    console.log("output", output);
    $("#calc_output").html(output);
}

$(document).ready(function () {
    $("#convert").click(convertF2C);
    $("#convert2").click(convertC2F);
    $("#calculate").click(calculate);
});






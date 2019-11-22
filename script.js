$(document).ready(function() {
    $("#button_effects1").click(function() {
        $('#par1').slideToggle('1000');
    });
    $("#button_effects2").mouseenter(function() {
        $('#button_effects2').fadeTo("slow", 0.50);
    });
    $("#button_effects2").mouseleave(function() {
        $('#button_effects2').fadeTo("slow", 1.00);
    });
    $("#button_effects3").click(function() {
        $('#par3').toggle('1000');
    });
    $("#button_effects4").click(function() {
        $('#par4').toggle('1000');
    });
    $("#button_effects5").click(function() {
        $('#par5').toggle('1000');
    });
    $("#button_effects6").click(function() {
        $('#par6').toggle('1000');
    });
});

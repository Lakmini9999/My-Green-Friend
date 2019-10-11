$(document).ready(function() {
    playH();
});

function playH() {
    $('#my_audio')[0].volume = 0.5;
    $('#my_audio')[0].load();
    $('#my_audio')[0].play().catch(function() {
    // do something
});
    alert("Dear Visitor, Welcome To My Green Friend!! It's nice to have you hear");
}
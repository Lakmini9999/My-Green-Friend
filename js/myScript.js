$(document).ready(function () {
    /*    $('.ryu').mouseenter(function(){
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
        })
        .mousedown(function(){
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate(
                {'left': '1020px'},
                1500,
                function(){
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '520px');
                });
        })
        .mouseup(function(){
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });*/

     $("#carouselExampleIndicators").carousel();

  // Enable Carousel Indicators
  $(".carousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(0);
  });
  $(".carousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(1);
  });
  $(".carousel-item").click(function(){
    $("#carouselExampleIndicators").carousel(2);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselExampleIndicators").carousel("next");
  });


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
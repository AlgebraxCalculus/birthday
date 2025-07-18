$(window).load(function () {
  $('.loading').fadeOut('fast');
  $('.container').fadeIn('fast');
});

$(document).ready(function () {
  var vw;

  $(window).resize(function () {
    vw = $(window).width() / 2;
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
    $('#b11').animate({ top: 240, left: vw - 350 }, 500);
    $('#b22').animate({ top: 240, left: vw - 250 }, 500);
    $('#b33').animate({ top: 240, left: vw - 150 }, 500);
    $('#b44').animate({ top: 240, left: vw - 50 }, 500);
    $('#b55').animate({ top: 240, left: vw + 50 }, 500);
    $('#b66').animate({ top: 240, left: vw + 150 }, 500);
    $('#b77').animate({ top: 240, left: vw + 250 }, 500);
  });

  $('#turn_on').click(function () {
    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('body').addClass('peach');
    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#play').fadeIn('slow');
    });
  });

  $('#play').click(function () {
    var audio = $('.song')[0];
    audio.play();
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');
    $('body').addClass('peach-after');
    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#bannar_coming').fadeIn('slow');
    });
  });

  $('#bannar_coming').click(function () {
    $('.bannar').addClass('bannar-come');
    $(this).fadeOut('slow').delay(6000).promise().done(function () {
      $('#balloons_flying').fadeIn('slow');
    });
  });

  function loopBalloon(id) {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $(id).animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopBalloon(id);
    });
  }

  $('#balloons_flying').click(function () {
    $('.balloon-border').animate({ top: -500 }, 8000);
    $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
    for (let i = 1; i <= 7; i++) {
      loopBalloon('#b' + i);
    }
    $(this).fadeOut('slow').delay(5000).promise().done(function () {
      $('#cake_fadein').fadeIn('slow');
    });
  });

  $('#cake_fadein').click(function () {
    $('.cake').fadeIn('slow');
    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#light_candle').fadeIn('slow');
    });
  });

  $('#light_candle').click(function () {
    $('.fuego').fadeIn('slow');
    $(this).fadeOut('slow').promise().done(function () {
      $('#wish_message').fadeIn('slow');
    });
  });

  $('#wish_message').click(function () {
    vw = $(window).width() / 2;
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
    $('#b1').attr('id', 'b11');
    $('#b2').attr('id', 'b22');
    $('#b3').attr('id', 'b33');
    $('#b4').attr('id', 'b44');
    $('#b5').attr('id', 'b55');
    $('#b6').attr('id', 'b66');
    $('#b7').attr('id', 'b77');
    $('#b11').animate({ top: 300, left: vw - 350 }, 500);
    $('#b22').animate({ top: 300, left: vw - 250 }, 500);
    $('#b33').animate({ top: 300, left: vw - 150 }, 500);
    $('#b44').animate({ top: 300, left: vw - 50 }, 500);
    $('#b55').animate({ top: 300, left: vw + 50 }, 500);
    $('#b66').animate({ top: 300, left: vw + 150 }, 500);
    $('#b77').animate({ top: 300, left: vw + 250 }, 500);
    $('.balloons').css('opacity', '0.9');
    $('.balloons h2').fadeIn(3000);
    $(this).fadeOut('slow').delay(3000).promise().done(function () {
      $('#story').fadeIn('slow');
    });
  });

  $('#story').click(function () {
    $(this).fadeOut('slow');
    $('.cake').fadeOut('fast').promise().done(function () {
      $('.message').fadeIn('slow');
    });

    let i = 0;

    function msgLoop(i) {
      $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
        i = i + 1;
        $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
        if (i == 50) {
          $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
            $('.cake').fadeIn('fast');
            startCornerPictureRotationOnce();
          });
        } else {
          msgLoop(i);
        }
      });
    }

    msgLoop(0);

    function showCornerBatch(startIndex, containerClass, maxIndex) {
      $(`.${containerClass} img`).css('opacity', '0');
      const positions = [
        { top: '70px', left: '40px' },
        { top: '70px', right: '40px' },
        { bottom: '70px', left: '40px' },
        { bottom: '70px', right: '40px' }
      ];

      for (let j = 0; j < 4; j++) {
        let picId = startIndex + j;
        if (picId <= maxIndex) {
          const pic = $(`.${containerClass} #Pic${picId}`);
          pic.css('opacity', '1');
          pic.css({ top: '', left: '', right: '', bottom: '' });
          pic.css(positions[j % 4]); // Lặp lại vị trí nếu cần
        }
      }
    }

    let currentIndex = 1;

    function startCornerPictureRotationOnce() {
      showCornerBatch(currentIndex, 'birthday_picture', 16);
      currentIndex += 4;
      if (currentIndex <= 16) {
        setTimeout(startCornerPictureRotationOnce, 7000);
      } else {
        // Giữ 4 ảnh cuối (pic13 đến pic16) và không ẩn birthday_picture
        showCornerBatch(13, 'birthday_picture', 16);
        setTimeout(() => {
          $('.bannar, .cake, .balloons').hide(); // Ẩn các phần tử khác, giữ birthday_picture
          // Chuyển sang card_picture sau 5 giây
          setTimeout(() => {
            $('.card_picture').fadeIn(6000);

            const cardImages = $('.card_picture img');
            let currentCardIndex = 17; // Bắt đầu từ Pic17

            function showNextCard() {
              if (currentCardIndex <= 21) { // Dừng khi đến Pic21
                // Ẩn tất cả ảnh
                cardImages.css('opacity', '0');
                // Hiển thị ảnh hiện tại ở trung tâm
                $(`.card_picture #Pic${currentCardIndex}`).css({
                  opacity: '1',
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '800px',
                  height: 'auto'
                });
                currentCardIndex++;
                setTimeout(showNextCard, 20000); // 20 giây mỗi ảnh
              } // Không fadeOut khi hết, giữ hiển thị
            }
            showNextCard(); // Bắt đầu với ảnh đầu tiên
          }, 5000); // Dừng 5 giây để xem 4 ảnh cuối
        }, 7000); // Độ trễ 7 giây sau khi hiển thị 4 ảnh cuối
      }
    }
  });
});
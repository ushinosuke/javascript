$(function(){

  let timer;
  let hour = 0;
  let min = 0;
  let sec = 0;
  let tenth_of_sec = 0;


  // 
  function displayTime(){
    let zero_padding_hour;
    let zero_padding_min;
    let zero_padding_sec;
    let zero_padding_tenth_of_sec;

    tenth_of_sec += 1;

    if (tenth_of_sec > 9) {
      tenth_of_sec = 0;
      sec += 1;
    }

    if (sec > 59) {
      sec = 0;
      min += 1;
    }

    if (min > 59) {
      min = 0;
      hour += 1;
    }

    $('#time').html(hour + ':' + min + ':' + sec + ':' + tenth_of_sec);
  }


  // START BUTTON
  $('#start').on('click', function(){
    hour = 0;
    min = 0;
    sec = 0;

    $('#time').html('0:0:0:0');
    timer = setInterval(displayTime, 100);

    $(this).prop('disabled', true);
    $('#stop').prop('disabled', false);
  });

  // STOP BUTTON
  $('#stop').on('click', function(){
    clearInterval(timer);

    $(this).prop('disabled', true);
    $('#start, #reset').prop('disabled', false);
  });

  // RESET
  $('#reset').on('click', function(){
    hour = 0;
    min = 0;
    sec = 0;
    tenth_of_sec = 0;

    $('#time').html('0:0:0:0');
    clearInterval(timer);

    $(this).prop('disabled', true);
    $('#start').prop('disabled', false);

  });

});

$(function(){
  $('input')
    .on('mouseover', function(){
      $(this).css({
        border: 'solid 2px #00f',
      });
    })
    .on('mouseout', function(){
      $(this).css({
	border: ''
      });
    });
});

let equation = '';
let key;
let result;

$(function(){
  $('input').on('click', function(){
    key = $(this).val();
    equation += key;
    result = equation;
    if (key == '=') {
      equation = eval(equation.replace('=', ''));
      result = equation;
    } else if (key == 'AC') {
      equation = '';
      result = 0;
    }
    $('#calc').html(result);
  });

});

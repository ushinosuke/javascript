$(function(){
  $('#searchText').on('input', filter);

  function filter() {
    const selector = 'div .targetArea';
    let input_text = $(this).val();

    if (input_text != '') {
      $(selector).each(function() {
	let keywords = $(this).find('p:nth-child(3)').text();
	if (keywords.indexOf(input_text) != -1) {
	  $(this).removeClass('hidden');
	} else {
          $(this).addClass('hidden');
	}
      });
    } else {
      $(selector).each(function() {
        $(this).removeClass('hidden');
      });
    }
  }

});

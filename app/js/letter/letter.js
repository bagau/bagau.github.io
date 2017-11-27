$(document).ready(function() 
{
	
	$('#letterForm').submit(function()
	{
		$('.jumbotronBox').show(300);
		var vals = {
			myName: $(this).find('#myName').val(),
			toName: $(this).find('#toName').val(),
			letterText: $(this).find('#letterText').val()
		};

		$('.jumbotronBox .myName').html(vals.myName);
		$(this).find('#myName').val(vals.toName);

		$('.jumbotronBox .toName').html(vals.toName);
		$(this).find('#toName').val(vals.myName);

		$('.jumbotronBox .letterText').html(vals.letterText);
		$(this).find('#letterText').val('');

		return false;
	});

});
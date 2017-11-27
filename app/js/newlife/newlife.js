(function(){

	$( document ).ready(function()
	{
		if ( !$('.tmoApp').length ) return false;
		if ( localStorage.nlfunc )
			nlfunc.data = JSON.parse(localStorage.nlfunc);
		nlfunc.setTemplate();
		$(document).on("submit", "#tmoForm", function(event) {
			event.preventDefault();
			nlfunc.next();
			return false;
		});
		$(document).on("click", ".addItem", function() {
			nlfunc.addItem();
		});
		$(document).on("click", ".removeItem", function() {
			nlfunc.removeItem($(this));
		});
		$(document).on("click", ".prevButton", function() {
			nlfunc.prev();
		});
		$(document).on("click", ".restartApp", function(event) {
			event.preventDefault();
			nlfunc.restartApp();
		});
	});

})();
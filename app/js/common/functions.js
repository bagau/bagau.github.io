var bagau = {
	partial: function ( which, data ) {
		var tmpl = $('#' + which + '-partial').html();
		return _.template(tmpl)(data);
	}
};
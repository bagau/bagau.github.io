/*
||||||||||||||||
||	 nlfunc - объект, где хранятся все заполненные данные
||   на будущее - можно вытаскивать этот объект из базы данных
||   и будет загружен шаг, на котором остановились
||||||||||||||||
*/
var nlfunc = {
	restart: {
		current: 1,
		step6: [{ text: '' }],
		step15: [{ text:'' }]
	},
	compileTemplate: function ( source ) {
		var template,
			current = nlfunc.data.current, 
			data = nlfunc.data['step'+current] || {};
		source = source || $('#step'+current).html();
		template = _.template( source );
		return template( data );
	},
	prev: function () {
		if ( nlfunc.data.current == 1 ) {
			alert("Вы находитесь в первом шаге");
			return false;
		}
		nlfunc.data.current--;
		nlfunc.setTemplate();
	},
	next: function () {
		var start = new Date().getTime();
		nlfunc.data['step'+nlfunc.data.current] = nlfunc.serializeForm();
		localStorage.nlfunc = JSON.stringify(nlfunc.data);
		nlfunc.prependText();
		nlfunc.data.current++;

		// ДО этого шага
		switch ( nlfunc.data.current )
		{
			case 10:
				nlfunc.data['step10'] = nlfunc.data['step6'];
				break;
			case 11:
				// пройдемся по массиву из 10 шага
				// добавим в обратном порядке в массив 11 шага
				nlfunc.step10to11();
				break;
			case 12:
				nlfunc.data.step12.text = '';
			case 14:
				if ( nlfunc.data.step13.price == 10 )
					nlfunc.data.current = 15;
				break;
			case 15:
				/*
					если есть негатив, переходим к шагу 10 - добавить негатив
					если нет негатива, в шаг 11 - добавить улучшение
				*/
				if ( nlfunc.data.step14.radio == 'is' )
					nlfunc.data.current = 10;
				else if ( nlfunc.data.step14.radio == 'isnot' ) {
					nlfunc.data.current = 11;
					delete nlfunc.data.step11;
				}
				break;
			case 17:
				/*
					если я обвинял кого-то другого, 
					но оказался ответственен сам
					вывести шаг 17 для прошения прощения
				*/
				if ( nlfunc.data.step16.myself )
					nlfunc.data.current = 17;
				else
					nlfunc.data.current = 18;
				break;
			default:
				break;
		}
		nlfunc.setTemplate();
	},
	appendTemplate: function ( source ) {
		var html = nlfunc.compileTemplate(source);
		$('.appendHtml').append(html);
	},
	setTemplate: function ( source ) {
		var html = nlfunc.compileTemplate(source);
		$('.setHtml').html(html);
	},
	addItem: function () {
		var partial, current = nlfunc.data.current;
		partial = $('#step'+current+'-partial').html();
		nlfunc.appendTemplate(partial);
	},
	removeItem: function ( elem ) {
		var id = elem.data('id');
		nlfunc.data['step'+nlfunc.data.current].splice(id, 1);
		elem.closest('.form-group').remove();
	},
	serializeForm: function () {
		var data = $('#tmoForm').serializeJSON();
		if ( data.d ) data = data.d;
		return data;
	},
	step10to11: function () {
		var step11 = [], step10 = nlfunc.data.step10;
		for ( var i = 0; i < step10.length; i++ ) {
			step11.unshift({neg: step10[i].text});
		}
		nlfunc.data.step11 = step11;
	},
	restartApp: function () {
		var conf = confirm('Начать заново?');
		if ( !conf ) return false;
		nlfunc.data = nlfunc.restart;
		delete localStorage.nlfunc;
		nlfunc.setTemplate();
	},
	prependText: function () {
		var current = nlfunc.data.current;
		var step = nlfunc.data['step'+current];
		console.log(step);
		if ( step.text ) {
			$('.prependText').prepend('<div>'+step.text+'</div>');
		}
		else if ( step.constructor === Array ) {
			for ( var i = 0; i <= step.length - 1; i++ ) {
				$('.prependText').prepend('<div>'+step[i].text+'</div>');
			};
		}
	}
};

nlfunc.data = nlfunc.restart;
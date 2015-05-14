define([

	'jails',
	'mustache'

], function( jails, mustache ){

	jails.component('table', function(html, ann){

		var cp = this, view,
			model = {}, input, table, partials;

		this.init = function(){

			partials = jails.templates;
			template = $(ann.template).html();
			render();
		};

		this.fill = function(){

			$.each(input, function(){
				if(!this.value) this.value = 0;
			});
		};

		this.clear = function(){
			render();
		};

		this.generate = function(){
			cp.emit('output', toString());
		};

		function render(){

			model.lines = new Array( ann.lines );
			model.collumns = new Array( ann.collumns );
			model.size = ann.size || 30;

			var htm = mustache.render( template, model, partials );
			html.html( htm );

			input = html.find('input');
			table = html.find('table');
		}

		function toString(){

			var tr, td, arr1 = [], arr2, v;
			tr = table.find('tr');

			$.each( tr, function(){

				td = $(this).find('td');
				arr2 = [];

				$.each( td, function(){
					v = $(this).find('input').val();
					arr2.push( v );
				});

				arr1.push('('+arr2+')');
			});

			return '['+ arr1+ ']';
		}

	});
});

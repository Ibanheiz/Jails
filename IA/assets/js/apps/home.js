define([

	'jails',
	'components/table'

], function( jails ){

	jails.app('home', function(html, data){

		var app = this, table, textarea;

		this.init = function(){

			table = this.x('[data-component=table]');
			textarea = html.find('textarea');

			this.listen('button:action', action);
			this.listen('table:output', output);
		};

		function action(e, method){
			table( method );
		}

		function output(e, out){
			textarea.val( out );
		}

	});
});

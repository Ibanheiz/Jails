define([

	'jails'

], function( jails ){

	jails.component('button', function(html, anno){

		var cp = this;

		this.init = function(){

			html.on('click', action);
		};

		function action(){
			cp.emit( 'action', anno.action );
		}

	});
});

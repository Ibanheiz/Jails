define([

	'jails',
	'mods/router/router',
	'mods/url/url',
	'models/todos',
	'views/todos'

], function( jails, router, url, todos){

	jails.app('todomvc', function(html, data){

		var
			app = this,
			r = router.create(),
			body = html.get(0);

		this.init = function(){

			if( !location.hash ) url.redirect('/');

			r.watch([
				{ '/:filter':filter },
				{ '/'		:filter }
			]);

			r.execute();
		};

		function filter( by ){

			by = by || 'all';

			app.broadcast('view:render', todos.result( by ));
			body.className = by;
		}
	});
});

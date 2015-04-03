define([

	'jails',
	'models/todos',

	'components/newentry',
	'components/todo',
	'components/footer-todo'

], function( jails, todos ){

	jails.controller('todos', function(html, data){

		var ctrlr = this;

		this.init = function(){

			this.listen('todo:edited', action('up'));
			this.listen('todo:complete', action('up'));
			this.listen('todo:destroy', action('remove', 'id'));

			this.listen('newentry:create', action('create'));
			this.listen('newentry:mark-all', action('mark_all'));

			this.listen('footer-todo:clear', action('clear'));
		};

		function action( method, prp ){

			return function(e, opt){

				var todo_action = todos[ method ];

				if( todo_action ){
					console.log(method);
					todo_action.call( todos, prp? opt[ prp ] :opt );
					ctrlr.render( todos.result() );
				}
			};
		}
	});
});

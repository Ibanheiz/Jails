	require.config({

	baseUrl :'assets/js/',
	deps    :[ 'mustache', 'jails', 'libs/zepto', global.page],

	paths   :{
		//jails		:'//rawgit.com/Javiani/Jails/master/source/jails.min',
		jails		:'../../../../../Jails-org/Jails/source/jails',
		mods		:'//rawgit.com/jails-org/Modules/master',
		mustache  	:'//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min'
	},

	callback :function( mustache, jails ){

		jails.start({
			base        :Zepto,
			templates   :{ engine :mustache }
		});
	}
});

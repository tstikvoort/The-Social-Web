Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'postList'});
Router.route( '/:_id', function() { 
	var post = posts.findOne({_id: this.params._id});
	this.render('postListItem',{
		data: post
	});
});
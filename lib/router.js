Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'postList'});
Router.route('/post/:_id', function() { 
	var post = posts.findOne({_id: this.params._id});
	this.render('postListItem',{
		data: post
	});
});
Router.route('/upload', {name:'uploadForm'});
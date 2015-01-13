Template.uploadForm.events({
	'submit form': function(e) {
		e.preventDefault();
		var user = Meteor.user();
		var post = {
			brand: $(e.target).find('[id="brand"]').val(),
	        model: $(e.target).find('[id="model"]').val(),
	        year: $(e.target).find('[id="year"]').val(),
	        description: $(e.target).find('[id="description"]').val(),
	        cover: '1.jpg',
        	img: ['2.jpg','3.jpg','4.jpg'],
	        finish: $(e.target).find('[id="finish"]').val(),
	        origin: $(e.target).find('[id="origin"]').val(),
	        comments: [],
	        likes: [],
	        date: new Date ()
		}
		posts.insert(post);
		Notifications.success('', 'Post uploaded!', options = {
			timeout: 1500,
			userCloseable: false
		});
		Router.go('/');
	}
});
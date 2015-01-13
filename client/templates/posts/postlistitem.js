$('body').addClass('detailPage');
Template.postListItem.helpers({
	liked: function() {
		var post = posts.findOne(this._id);
		var user = Meteor.user();
		var likes = [];
		post.likes.forEach(function(like){
			likes.push(like._id);
		});
		if(likes.indexOf(user._id) < 0) {
			return false;
		}
		return true;
	}
});
Template.postListItem.events({
	'submit form': function(e) {
	    e.preventDefault();
	    var user = Meteor.user();
	    var comment = {
			user_id: user._id,
			name: user.profile.name,
			img: user.profile.picture,
			message: $(e.target).find('[id="comment"]').val(),
			datetime: new Date()
	    };
	    posts.update({_id: $(e.target).find('[id="_id"]').val()}, {$push: {'comments': comment}});
	    $(e.target).find('[id="comment"]').val('');
	    Notifications.success('', 'Comment posted!', options = {
			timeout: 1500,
			userCloseable: false
		});
	},
	'click #addLike': function(e){
		var user = Meteor.user();
		var post = posts.findOne(this._id);
		var newLike = {
			_id: user._id
		};
		var likes = [];
		post.likes.forEach(function(like){
			likes.push(like._id);
		});
		if(likes.indexOf(user._id) < 0) {
			posts.update({_id: post._id}, {$push: {'likes': newLike}});
		}
		Notifications.success('', 'Post liked!', options = {
			timeout: 1500,
			userCloseable: false
		});
	}
});
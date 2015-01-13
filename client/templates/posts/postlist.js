Meteor.subscribe('posts');
Meteor.subscribe("users");
Meteor.subscribe("userData");

Template.postList.helpers({
	posts: function() {
		return posts.find().fetch();
	}
});
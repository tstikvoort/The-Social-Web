posts = new Meteor.Collection('posts');
posts.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	}
});
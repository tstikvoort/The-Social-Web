Template.header.helpers({
	detailPage: function(){
		var routeName = Router.current().route. getName();
		if(routeName == "post.:_id") {
			return true;
		}
		return false;
	}
});
Template.header.events({
	'click .back': function(e) {
		Router.go('/');
	},
	'click .menuButton': function(e) {
		$('body').addClass('menuActive');
	},
	'click .overlay': function(e) {
		$('body').removeClass('menuActive');
	},
	'click .menuItem': function(e) {
		$('body').removeClass('menuActive');
	},
	'click .logout': function(e) {
		Meteor.logout();
	}
});
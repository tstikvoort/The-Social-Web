Template.header.events({
	'click .menuButton': function(e) {
		$('body').addClass('menuActive');
	},
	'click .overlay': function(e) {
		$('body').removeClass('menuActive');
	}
});
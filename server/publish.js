Meteor.publish('posts', function(){
  	return posts.find();
});
Meteor.publish("users", function () {
  return Meteor.users.find(
    {fields: {'services': 1}});
});
Meteor.publish("userData", function () {
    return Meteor.users.find();
});
Meteor.publish('getPage', function() {
    return Posts.find();
});
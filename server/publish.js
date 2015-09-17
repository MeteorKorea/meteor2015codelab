Meteor.publish('getPage', function(pageId) {
    return Posts.find({pageId: pageId});
});
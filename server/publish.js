Meteor.publish('getPage', function(pageId) {
    return Posts.find({pageId: pageId});
});

Meteor.publish('feelingLucky', function() {
    return Posts.find({}, {
        skip: Math.random()*Posts.find().count(),
        limit: 1
    });
});

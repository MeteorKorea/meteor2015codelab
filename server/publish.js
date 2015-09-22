Meteor.publish('getPage', function(pageId) {
    return Posts.find({pageId: pageId});
});

Meteor.publish('recentPosts', function() {
    var followings = this.userId &&
        Meteor.users.findOne(this.userId).profile.followings || {};
    var pageIds = [];
    for (var id in followings ) {
        pageIds.push(id);
    }
    return Posts.find({
        pageId: {
            $in: pageIds
        }
    })
});

Meteor.publish('feelingLucky', function() {
    return Posts.find({}, {
        skip: Math.random()*Posts.find().count(),
        limit: 1
    });
});
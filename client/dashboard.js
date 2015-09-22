Template.dashboard.onCreated(function() {
    var instance=this;

    this.autorun(function() {
        var user = Meteor.user();
        instance.handle && instance.handle.stop();
        instance.handle = instance.subscribe(
            user && 'recentPosts' || 'feelingLucky'
        );
    });
});

Template.dashboard.helpers({
    'luckyPage': function() {
        var post = Posts.findOne()
        return post && post.pageId;
    },
    'pages': function() {
        return _.unique(
            _.pluck(Posts.find().fetch(), 'pageId')
        ).map(function(v) {
            return { pageId: v };
        });
    }
});
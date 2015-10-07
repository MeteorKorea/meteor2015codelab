Template.dashboard.onCreated(function() {
    this.subscribe('feelingLucky');
});
Template.dashboard.helpers({
    'luckyPage': function() {
        var post = Posts.findOne()
        return post && post.pageId;
    },
    'pages': function() {
        var result = [];
        for (var i in Meteor.user().profile.followings) {
          result.push({ pageId: i });
        }
        return result;
    }
});

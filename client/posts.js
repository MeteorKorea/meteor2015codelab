Template.posts.onCreated(function() {
    var instance= this;
    this.autorun(function() {
        instance.subscribe('getPage', Session.get('pageId'));
    });
    this.interval = Meteor.setInterval(function() {
        Session.set('live', Random.id());
    }, 1000);
});

Template.posts.helpers({
    "posts": function () {
        return Posts.find({}, {
            sort: {
                createdAt: -1
            }
        });
    },
    "timeFrom": function(time) {
        Session.get('live');
        return moment().from(time);
    }
});

Template.posts.onDestroyed(function() {
    Meteor.clearInterval(this.interval);
});

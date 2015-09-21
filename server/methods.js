Meteor.methods({
    "addPosts": function(obj) {
        check(this.userId, String);
        Posts.insert({
            author: {
                _id: this.userId,
                name: Meteor.user().username,
                profile_image: Gravatar.imageUrl(Meteor.user().emails[0].address, {d: "retro"})
            },
            pageId: obj.pageId,
            message: obj.message,
            createdAt: new Date()
        });
    },
    "follow": function(pageId) {
        check(this.userId, String);
        var obj={};
        obj["profile.followings."+pageId]={
            createdAt: new Date()
        };
        Meteor.users.update(this.userId, {
            $set: obj
        });
    },
    "unfollow": function(pageId) {
        check(this.userId, String);
        var obj={};
        obj["profile.followings."+pageId]="";
        Meteor.users.update(this.userId, {
            $unset: obj
        });
    }
});
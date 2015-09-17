Meteor.methods({
    "addPosts": function(obj) {
        Posts.insert({
            author: {
                name: obj.name,
                profile_image: obj.profile_image
            },
            pageId: obj.pageId,
            message: obj.message,
            createdAt: new Date()
        });
    }
});
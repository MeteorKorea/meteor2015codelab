Template.posts.onCreated(function() {
    var instance= this;
    this.autorun(function() {
        instance.subscribe('getPage', Session.get('pageId'));
    });
});

Template.posts.helpers({
   "posts": function() {
       return Posts.find({}, {
           sort: {
               createdAt: -1
           }
       });
   }
});
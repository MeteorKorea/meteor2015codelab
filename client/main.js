Template.main.helpers({
  'page': function() {
      return Session.get('pageId');
  }
});

Template.main.onCreated(function() {
    this.subscribe('getPage');
});

Template.main.events({
    "submit": function(event, template) {
        Meteor.call("addPosts", {
            name: "Slave4U",
            profile_image: "http://lorempixel.com/64/64/people/",
            message : template.find('#post').value
        }, function(err) {
            if (err) {
                throw(error);
            } else {
                template.find('#post').value = "";
            }
        });
        event.preventDefault();
    }
});
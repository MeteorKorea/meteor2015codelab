Template.main.helpers({
  'page': function() {
      return Session.get('pageId') || 'popular';
  },
  'isFollowing': function() {
      var followings = Meteor.user().profile.followings;
      return followings && followings[Session.get('pageId')];
  }
});

Template.main.events({
    "submit": function(event, template) {
        Meteor.call("addPosts", {
            pageId: Session.get('pageId'),
            message: template.find('#post').value
        }, function (err) {
            if (err) {
                throw(error);
            } else {
                template.find('#post').value = "";
            }
        });
        event.preventDefault();
    },
    "click #follow": function() {
        Meteor.call('follow', Session.get('pageId'));
    },
    "click #unfollow": function() {
        Meteor.call('unfollow', Session.get('pageId'));
    }
});
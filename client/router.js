FlowRouter.route('/page/:pageId', {
    name: 'main',
    action: function(params) {
        Session.set('pageId', params.pageId);
    }
});
// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {
  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function (roomname) {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();

    _.filter(Messages.getData(), (message) => {
      return roomname ? message.roomname === roomname : true;
    })
      .map((message) => {
        return {
          username: message.username,
          text: message.text,
        };
      })
      .forEach((message) => {
        if (Friends.getData().has(message.username)) {
        }
        MessagesView.renderMessage({
          ...message,
          friendClass: Friends.getData().has(message.username)
            ? 'friend'
            : 'normal',
        });
      });
  },

  renderMessage: function (message) {
    // message string -> MessageView.render(message) -> html style -> append
    // Mesxx.render(mess) -> html string -> $('#chats').append
    // TODO: Render a single message.
    MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username;
    if ($(event.target).attr('class') === 'username') {
      username = event.target.innerHTML;
      Friends.toggleStatus(username);
      MessagesView.render($('option:selected').text());
    }
  },
};

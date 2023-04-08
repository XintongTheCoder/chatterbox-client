// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {
  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //this.render();
  },

  render: function () {
    // for
    // TODO: Render _all_ the messages.

    _.map(Messages.getData(), (message) => {
      return {
        username: message.username,
        text: message.text,
      };
    }).forEach((filteredMessage) => {
      this.renderMessage(filteredMessage);
    });
  },

  renderMessage: function (message) {
    // message string -> MessageView.render(message) -> html style -> append
    // Mesxx.render(mess) -> html string -> $('#chats').append
    // TODO: Render a single message.
    $('#chats').append(MessageView.render(message));
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },
};

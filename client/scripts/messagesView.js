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

    console.log('###', roomname);
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
        if (Friends._data.includes(message.username)) {
        }
        this.renderMessage(message);
      });
  },

  renderMessage: function (message) {
    // message string -> MessageView.render(message) -> html style -> append
    // Mesxx.render(mess) -> html string -> $('#chats').append
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    var username = message.username;
    // $message.addClass('username');
    // $('#chats').append($message);
    $('#chats').append(MessageView.render(message));
    // $('.username').css('font-weight', '1200');
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //var username = $(this).children()[0].innerHTML;
    var username;
    if ($(event.target).attr('class') === 'username') {
      //$(event.target).addClass('friend');
      username = event.target.innerHTML;
      Friends.toggleStatus(username, $(event.target));
    }
    //MessagesView.$chats.getElementByClassName('username').toggleClass('friend');
    //console.log(Friends.getData());
  },
};

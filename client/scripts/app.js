// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function (callback = () => {}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      data = _.map(data, (message) => {
        message.text = (message.text || '').replace(/<(\/)?script>/g, '');
        return message;
      });

      Messages.setData(data);
      var roomnames = _.map(data, (message) => {
        return message.roomname;
      });
      roomnames = _.uniq(roomnames);

      Rooms.setData(roomnames);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      MessagesView.render();
      //$('.username').on('click', MessagesView.handleClick);
      RoomsView.render();
    });
    callback();
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
};

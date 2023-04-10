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
    App.fetch(() => {
      App.stopSpinner();
      RoomsView.render();
      MessagesView.render(Rooms.getSelected());
    });

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch, 10000);
  },

  fetch: function (callback = () => {}) {
    // Parse.readAll((data) => {...}); waits for data to be returned and handle the data
    Parse.readAll((data) => {
      // Examine the response from the server request:
      console.log(data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // Filter out all <script> tags, can use _.template(<%-   %>) instead
      // data = _.map(data, (message) => {
      //   message.text = (message.text || '').replace(/<(\/)?script>/g, '');
      //   return message;
      // });

      // Get messages
      Messages.setData(data);

      // Get roomnames
      var roomnames = _.map(data, (message) => {
        return message.roomname;
      });
      roomnames = _.uniq(roomnames);
      Rooms.setData(roomnames);
      // Only after all above have been executed, callback can be involked
      callback();
    });
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

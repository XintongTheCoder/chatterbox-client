// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function () {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms.getData().forEach((roomname) => {
      this.renderRoom(roomname);
    });
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    $('#rooms select').append(
      '<option class="roomname">' + roomname + '</option>'
    );
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
    var roomname = Rooms.getSelected();
    // var roomname = $('option:selected').text(); // chats only have this roomname 's message
    MessagesView.render(roomname);
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = window.prompt('Please enter your room name: ');
    Rooms.add(roomname);
    RoomsView.render();
  },
};

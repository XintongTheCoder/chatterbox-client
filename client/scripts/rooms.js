// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  // TODO: Define how you want to store the list of rooms
  _data: [],

  setData: (data) => {
    Rooms._data = data;
  },
  getData: () => {
    return Rooms._data;
  },
  add: (roomname) => {
    Rooms._data.push(roomname);
  },
  getSelected: () => $('option:selected').text(), // NOTE: here should not use selected: $(...), otherwise it won't be updated once assigned
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
};

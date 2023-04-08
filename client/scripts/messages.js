// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  // Chronological order
  _data: [],

  setData: function (data) {
    this._data = data;
  },

  getData: function () {
    return this._data;
  },
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
};

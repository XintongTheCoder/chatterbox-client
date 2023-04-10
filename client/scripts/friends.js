// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.
  _data: new Set(),

  toggleStatus: (username) => {
    if (username === App.username) {
      return;
    }
    if (!Friends._data.has(username)) {
      Friends._data.add(username);
    } else {
      Friends._data.delete(username);
    }
  },

  isFriend: (username) => {
    return Friends._data.has(username);
  },

  getData: () => {
    return Friends._data;
  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
};

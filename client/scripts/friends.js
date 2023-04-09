// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.
  $friend: $('friend'),
  _data: [],

  toggleStatus: (username, $node) => {
    if (!Friends._data.includes(username)) {
      $node.addClass('friend');
      Friends._data.push(username);
    } else {
      var index = Friends._data.indexOf(username);
      $node.removeClass('friend');
      Friends._data.splice(index, 1);
    }
  },

  getData: () => {
    return Friends._data;
  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
};

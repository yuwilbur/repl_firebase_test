function signGuestbook(name, comment) {
  $("#comments").append("<p><b>" + name + "</b><br/>" + comment + "</p>");
}

$(document).ready(
  function() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAuC9lz0Q7ArGtg8fHg2UtvOBOs0AYYZ4E",
    authDomain: "goa-matching.firebaseapp.com",
    databaseURL: "https://goa-matching-default-rtdb.firebaseio.com",
    projectId: "goa-matching",
    storageBucket: "goa-matching.appspot.com",
    messagingSenderId: "116146591534",
    appId: "1:116146591534:web:17c566c8f92d9da9338cbf",
    measurementId: "G-9PQDJN3X4P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let guestBook = firebase.database().ref();

  guestBook.on('child_added', function(guest) {
  if (guest.val().name && guest.val().comment) {
      signGuestbook(guest.val().name,guest.val().comment);
  }
  });

  $('#guestbook').submit(function(event) {
    event.preventDefault();
    // Add guest to guestbook
    guestBook.push({
      name: $('#name').val(),
      comment: $('#comment').val(),
    });

    $('#name').val('');
    $('#comment').val('');
    $('#name').focus();
  });
  }
);

  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfvm6ox56PTTyPDdatX077rUjCSuoH24k",
    authDomain: "testproject-1075c.firebaseapp.com",
    databaseURL: "https://testproject-1075c.firebaseio.com",
    storageBucket: "testproject-1075c.appspot.com",
    messagingSenderId: "79919960539"
  };
  
  firebase.initializeApp(config);

    // Variables
    // ================================================================================

    // Get a reference to the database service
    var database = firebase.database();

    // ========================================= START CODING BELOW!!

  var count = 0;

  function writeNewUser (userObj) {
      // Get a key for a new User.
    var newUserId = firebase.database().ref().child('users').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/users/' + newUserId] = userObj;
    
    console.log("writing new user " + newUserId);
    return firebase.database().ref().update(updates);
  }

// Capture Button Click
$("#submit-employee").on("click", function(event) {
      event.preventDefault();

      console.log($("#start-date").val().trim());
      var user = {
        "name" : $("#employee-name").val().trim(), 
        "role" : $("#role").val().trim(), 
        "monthlyRate" : $("#monthly-rate").val().trim(),
        "startDate" : $("#start-date").val().trim()
        
      };
      $("#bid-form :input").val("");
      writeNewUser(user);
});


function writeEmployee(userObj){
  var prevTime = Date(year,month,day,hour,minute);
  var currTime = Date();
  var monthsWorked = (thisTime.getTime()-prevTime.getTime())/(1000*60*60*24*30);
  var amountBilled = monthsWorked * userObj.rate;

  $("#employee-table").append('<tr><td>'+ userObj.name + '</td><td>' + userObj.role + '</td><td>' + timeWorked + '</td><td>' + userObj.rate + '</td><td>' + totalBilled + '</td></tr>');

}


 database.ref('users').on("child_added", function(snapshot, prevChild) {
      console.log(JSON.stringify(snapshot.val()));


}, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });


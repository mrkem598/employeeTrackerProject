  
  // Initialize Firebase


  var config = {
    apiKey: "AIzaSyC_q9RG0Ooo6qZCUEuzC3Gwcz7pZkELW6w",
    authDomain: "employeetrackerproject-96ca9.firebaseapp.com",
    databaseURL: "https://employeetrackerproject-96ca9.firebaseio.com",
    storageBucket: "employeetrackerproject-96ca9.appspot.com",
    messagingSenderId: "104765619563"
  };
  firebase.initializeApp(config);
//this is the date format which i get it from the moment.js library
var randomDate = '02/23/1999'
var dateObj = new Date(randomDate)
console.log(dateObj)
var momentObj = moment(dateObj)
var momentString = momentObj.format('YYYY-MM-DD')
var format2 =  momentObj.format('MM-DD-YYYY')
var format3 =  momentObj.format("dddd, MMMM Do YYYY, h:mm:ss a")
    // Variables
    // ================================================================================

    // Get a reference to the database service
    var database = firebase.database();
    var count = 0;
// write a function to write the new user
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
  //var prevTime = Date(year,month,day,hour,minute);
  //var currTime = Date();
  //var monthsWorked = (thisTime.getTime()-prevTime.getTime())/(1000*60*60*24*30);
  //var amountBilled = (monthsWorked * userObj.rate);

  $("#employee-table").append('<tr><td>'+ userObj.name + '</td><td>'+ userObj.role + '<tr><td>' + userObj.totalBilled + '</td><td>'+ userObj.timeWorked + '</td><td>' + userObj.rate + '</td><td>');

 }


 database.ref('users').on("child_added", function(snapshot, prevChild) {
  writeEmployee(snapshot.val())
  console.log(snapshot.val())


}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
 $(".bxslider").mohSlider({
  mode: "horizontal",
  useCSS: false,
  infiniteLoop: false,
  hideControlonEnd: true,
  easing: "easeOutElastic",
  speed: 2000
 });


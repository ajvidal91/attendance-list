/*The user in for this app wants to know who is late, who is on time,
while also being able to see the full list of students.
*/

//these are the variables for the Arrays
var peopleTardy = [];
var peopleOnTime = [];


//this button (Event listener) will log who is on time
$("#onTimeBtn").on("click", function(){
  var personOnTime = $("#onTime").val();
  peopleOnTime.push(personOnTime);
  console.log(peopleOnTime);
  clearInputs();
});

//this button (Event listener) will log who is tardy
$("#tardyBtn").on("click", function(){
  var personTardy = $("#tardy").val();
  peopleTardy.push(personTardy);
  console.log(peopleTardy);
  clearInputs();
});

//this button (Event listener) will present all students who are on time
$("#showAllOnTime").on("click", function(){
  $("#presentList").html("<li>"+ peopleOnTime.join("</li><li>") +"</li>");
});

//this button (Event listener) will present all students who are tardy
$("#showAllTardy").on("click", function(){
    $("#tardyList").html("<li>"+ peopleTardy.join("</li><li>") +"</li>");
});

//this button (Event listener) will display all students logged into the seperate lists
$("#show").on("click", function(){
  $("#showAll").html("<li>"+ peopleOnTime.concat(peopleTardy).join("</li><li>") +"</li>");
});

/*this button (Event listener) will clear all/any lists displayed on the screen
and empty
*/
$("#clearAll").on("click", function(){
  $("#presentList,#tardyList,#showAll").html("");
  peopleOnTime = [];
  peopleTardy = [];
});

//this function will clear my inputs after the students name is submitted
function clearInputs(){
  $("#tardy").val("");
  $("#onTime").val("");
}

var stem = {
	classnumber: "F103",
  students: 18
};
//object of classroom//
var userInput = prompt("Classroom or students?");
//asks user what info they wanna see//
var lowercase = userInput.toLowerCase();
//this forces the user's anwswer to lowercase//
function askAgain() {
var userInput = prompt("classnumber or students");
var lowercase = userInput.toLowerCase()
}
if ((lowercase === "classroom") || (lowercase === "students")) {
	window.alert(stem[lowercase]);
//window alert shows user's input//
}
else {
  askAgain();
}
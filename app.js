// chap 9
var spec = prompt("Your species?", "human");
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats);
////////////////////////////////////////////////////

//chap 10

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
//   var correctAnswer = "Vatican";
//   if (x === correctAnswer) {
//   score++;
//   userIQ = "genius";
//   alert("Correct!");
//   }

//  var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
// alert("Correct!");
//  }
////////////////////////////////////////////////////

//chap 11

// if (fullName === "Mark" + " " + "Myers") {}
//     if (fullName === firstName + " " + "Myers") {}
//     if (fullName === firstName + " " + "Myers") {}

//     if (totalCost === 81.50 + 135) {}
//     if (totalCost === materialsCost + 135) {}
//     if (totalCost === materialsCost + laborCost) {}
//     if (x + y === a - b) {}
if (yourTicketNumber !== 487208) {
  alert("Better luck next time.");
}
// operators
// ==(equal)
//!=(not equal)
//===(equal with data type)
//<(less than)
//>(greater than)
//<=(less than equal to)
//>=(greator than equal to)
// (&&)and operator
//(||)OR OPERATOR
// true operators
if (1 > 0) {
}
if (0 < 1) {
}
if (1 >= 0) {
}

if (1 >= 1) {
}
if (0 <= 1) {
}
if (1 <= 1) {
}
////////////////////////////////////////////////////

//chap 12

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
if (x !== "Vatican") {
  alert("Wrong answer");
}
if (x === "Vatican") {
  alert("Correct!");
} else {
  alert("Wrong answer");
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
} else {
  score--;
  userIQ = "problematic";
  alert("Incorrect");
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
} else if (x === "Rome") {
  alert("Incorrect but close");
} else {
  alert("Incorrect");
}
////////////////////////////////////////////////////
//chap 13

if (weight > 300 && time < 6) {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our tryout!");
} else {
  alert("Come to our cookout!");
}
if (age > 65 || (age < 21 && res === "U.S.")) {
}
if ((age > 65 || age < 21) && res === "U.S.") {
}
if (age > 65 || (age < 21 && res === "U.S.")) {
}
////////////////////////////////////////////////////
//chap 14
if ((x === y || a === b) && c === d) {
  g = h;
} else {
  e = f;
}
if (c === d) {
  if (x === y) {
    g = h;
  } else if (a === b) {
    g = h;
  } else {
    e = f;
  }
} else {
  e = f;
}
////////////////////////////////////////////////////

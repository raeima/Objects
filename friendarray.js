var raene = {
  firstName: "Raene",
  age: 15,
  grade: 11,
  friends: ["Alexus", "Michael", "Lauren", "Shayna"]
};
var michael = {
  firstName: "Michael",
  age: 16,
  grade: 11,
  friends: ["Faith", "June", "Anya", "Shayna"]
};
var shayna = {
  firstName: "Shayna",
  age: 15,
  grade: 11,
  friends: ["Alexus", "Michael", "Lauren", "Raene"]
};
var alexus = {
  firstName: "Alexus",
  age: 17,
  grade: "Graduated",
  friends: ["Alexus", "Alexus", "Raene", "Raene"]
};
var x = [raene, michael, shayna, alexus];
window.alert(x[3].grade);

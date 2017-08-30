var question = prompt("How much do you have?")

var bankAccount = {};
bankAccount["name"] = "Raene";
bankAccount["balance"] = question;
var deposit = prompt("How much you gonna withdraw?")
var answer = [(bankAccount["balance"])-(deposit)];
window.alert(answer);

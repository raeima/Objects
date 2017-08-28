function calculateArea(width, height) {
	var area = width * height
  return area;
}
var height = prompt("What is the height?")
var width = prompt("What is the width?")
var wallOne = calculateArea(height, width);
window.alert(wallOne);
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It returns the values of the iterable object.

var scores = [60, 80, 90, 75];
for(var score of scores){
    score += 5;
    console.log(score);
}
console.log("--------------------------------------");

var colors = ["Red", "Green", "Bluee", "Yellow", "Orange"];
for(var[index, color] of colors.entries()){
    console.log(index + "-->" + color);
}
console.log("--------------------------------------");
var string = "Hello World!";
for(var char of string){
    console.log(char);
}


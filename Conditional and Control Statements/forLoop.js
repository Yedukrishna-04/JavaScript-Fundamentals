 // var messsage = "Hello World!";

 // for (var i =1; i < 11; i++){
 //     console.log(messsage+" " + i);
 // }

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squaredNumbers = [];
for(var i = 0; i < numbers.length; i++){
    squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log(squaredNumbers);

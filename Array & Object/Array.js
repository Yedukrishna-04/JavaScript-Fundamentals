// Arrays provide user with collecton of data

var arr = [123, "Hello", true, 12.34];
//console.log(arr);
//console.log('The first element in the array is at 0th index and is: '+arr[0]);
//console.log('The second element in the array is at 1st index and is: '+arr[1]);
//console.log('The third element in the array is at 2nd index and is: '+arr[2]);

//var a = arr[3];
//console.log(a);

var arr2 = [12, 13, 14, 15];
console.log(arr2);
//pop () method removes the last element from the array
arr2.pop();
console.log("The New array after pop is: "+arr2);
console.log(arr2);
//push () methos adds the element at the end of the array
arr2.push(16);
console.log("The New array after push is: "+arr2);
console.log(arr2);
//shift () methods removes the first element from the array
var b = arr2.shift();
console.log("The New array after shift is: "+arr2);
//unshift() method adds the element at the beginning of the array
arr2.unshift(17);
console.log("The New array after unshift is: "+arr2);
function sumAll(arr) {
var a = arr[0];
var b = arr[1];
var sum = 0; 
  if (a < b) {
    for(var i = a; i <= b; i++) {
       sum = sum + i; 
    }
  } else {
    for(var j = b; j <= a; j++) {
       sum = sum + j; 
    }
  }  
  return sum;
}
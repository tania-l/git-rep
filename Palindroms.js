function palindrom(str) {
  
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g,'');
  var myArray = str.split("");
  var x = myArray.length;
  var flag = 0;
 
  for(var i=0; i<x; i++) {
    if (i<=x/2) {
      if(myArray[i] == myArray[x-i-1]) {
          flag = flag + 0;   
       } else flag = flag + 1;
    }
  }
  if (flag === 0) {
    return true;
  } else return false;
}


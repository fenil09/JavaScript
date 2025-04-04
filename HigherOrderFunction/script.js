// higher order and callback

// Function taking an function as an parameter can be termed as an higher order function.


// Lets create a function that would take a function in the parameter and we would use it during the function calling.

 function add(a,b,cb){
    let result = a+b
    cb(result)
 }



 add(4,7,(val) => alert(val))

 // Arrow function we would try to create a higher order function.

 const subtract = (a,b,cb) =>{
    let result = a-b
    cb(result)
 }

 subtract(7,5,(val) => alert(val))

 // Let us refactor the code, we would remove the callback and instead return a function which would be logging the value of the operation.

  function multiply(a,b){
     let result = a*b;
     return () => alert(result)
  }
  const multiplier = multiply(4,7)
  multiplier()
// function a block of code that can perform a specific task.


function sayhello(){
    return console.log('hey piush')
}

sayhello()

// Parameters vs Arguments the basic difference is that whenever we are passing anything during function creation
// can be seen as parameters whereas the things passed during function calling can be seen as arguments.

// We need to create a function that can take n parameters and return us the addition of the numbers.

function customadd(){
     var sum =0
     for(let i =0;i<arguments.length;i++){
       sum = sum+arguments[i]
     }
     return sum;
}

 console.log(customadd(45,87))
 console.log(customadd(4,7))
 console.log(customadd(77,87,97))

 // Arrow Functions:

 // Simple Arrow function. Syntax

 const hellosay = () =>{
  alert("we are saying hello")
 }

 hellosay()

 // Setting up parameters for the function

  const add = (a,b) => {
    alert(a+b)
  }
  add(7,8)

 // We do not have the arguments keyword in the arrow function.
 // This implies that we have to use spread operator in such case.

 // Concept of Hositing.
// Hositing basically means that we can call our function above the function declaration.

/*
meaning if we have a function named as sayhello we can hoist the function like this:
sayhello()
function sayhello{
 console.log("say something")
}
 this would work eventually cause javascript stores the function definition in the memory before the execution
 even starts.

 So function hoisting does not works in the case of Arrow function meaning we gotta call the function only after 
 its body is been defined.
*/

/*
  This keyword.
  In the case of Normal function This has a local scope meaning it would be pointing to the caller which is the object we created.
  In the case of Arrow functon This has a global scope meaning the value for this would be Object window which in general means the browser on which our site would be running.
  we wont be able to access the value of the object when we have the function defined as an Arrow function using This.

*/
 const obj ={
  value: 20,
  myfunction : ()=>{
    alert(this.value)
  }
 } // this would give you undefined cause it is pointing towards the object window instead of the object value.
 obj.myfunction()

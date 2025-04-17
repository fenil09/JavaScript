// In simple words if we have function inside our main function which
// is design to do something then we can say that it is an closure.

function main(name){

function sayname(){
    console.log(name)
} // -> this can be seen as a closure.

 // making some changes to the function'

 return sayname
}

const output = main("fenil")
const newoutput = main('avi')
//output()
//newoutput()


// let us say we want to make an fixed adder function to a constant number we can do it using closures


 function adder(num){
    function add(b){
        console.log(num+b)
    }

    return add;
 }

 const addto5 = adder(5)
 addto5(5)
 addto5(10)
 addto5(85456)



 function makecounter(){
    let count =0
    return function(){
        count+=1
        return count
    }

 }

 var counter1 = makecounter()
 var counter2= makecounter()
 console.log(counter1())
 console.log(counter2())
 console.log(counter1())

 //Closures allow a function to access variables from its parent scope even after the parent has finished execution.
// This means the closure as reference of the variable that is inside its parent scope meaning 
// if we are calling that closure function on the variable defined in the parent scope it is going to 
// remember the value for the variable as it has the reference to it not a copy.


 function buildfunctions(){
    var arr= [];
    for(var i =0 ;i<3; i++){
        arr[i] = i
    }
 }


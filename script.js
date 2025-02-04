
// Array in javascript
var arr= [1,2,3,45,1,6,7];
// foreach, map, filter find and indexof
// Lets say we want to do something with every memeber of the array then we 
// would be foreach
arr.forEach(function(val){
    console.log(val + "hello")
})
// okay what we are doing over here is that we want to add hello to every element that is present in the array
// so we used forEach for that and we are running a function to get each value present in the array and then
// adding hello to each of the value.

// map would help us to form a new array: If we want to perform some operation on the 
// the array and get a new array we can use map function

var newarr= arr.map(function(val){
    return val+13;
})

console.log(newarr)

// The key difference between foreach and map in JS is that foreach never return anything so using a return statement
// with foreach would give a undefine so if we want to return a new array we gotta using map function in JS

// Filter: We want to get elements which are smaller than 3,, so we can use filter in that case

var filteredarr = arr.filter(function(val){
    return val<3;
})

console.log(filteredarr)

// Find function to find a particular thing from the array

var ans = arr.find(function(val){
    if(val==45) return val;
})

console.log(ans)

var navoarray= [1,4,5]

var firstelement = navoarray.indexOf(4)
console.log(firstelement)

// Indexof function would be helping us to get the index value of the element we 
// we are passing inside the function.
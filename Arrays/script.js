
// Arrays would be used when we want to store multiple things in one variable then we would be using arrays.

const studets = ["fenil","jashpal","avi","chetan"]
const thirdstudnet= studets[1] // if we want to access the third student from the array it would be third-1 like the element real postion in array -1
// so in the above case thirdstudent would be student[2]
alert(thirdstudnet)

// One important thing to know here is that if we want to add, update or delete something to student array we can do it.
// but if we try to reassign a complete new array to student variable it wont be possible due to the constant variable declaration.

// now adding a new data at the end of the array

 studets.push('Alexa','siri');
 // push helping to add multiple values at the end.
 alert(studets)

 // In other languages the arrays are homogenous meaning if we create a array of type string then we would be storing only string values in it,
 // but in the case of JS we can add any kind of the values meaning we can have string, numbers, booleans in a single array.

  const array= [1,"fenil",true];
  alert(array)

  // deleting values in array

array.pop() // delete values from the end of the array.
alert(array)

// Highorder function for Arrays.

// Foreach, so when we apply foreach on an array we get the option to pass a function to it which
// would be applied to every element present in the array.

 let print = (value) => {
    alert(value)
 }

 studets.forEach(print)
 // map function that would be same as foreach but the only difference is that map would return us with a new array but foreach does not return us anything.

 // Task we have an numbers array we want to return a new array which would be having double of the values present in it.

  const numbers = [1,2,3,4]

   let newnumber = numbers.map((value) => value*2) // as map returns us with a new array.
   alert(newnumber)


// we need to create a new array that would be only having even numbers in it.

 let evenarray = numbers.filter((value) => value%2 ==0) // would be storing all the values from our original array into the new array for which the conditions are true.
  alert(evenarray)
 
  // we can use the slice function to get the sub part from any array, it would be 
  // taking a starting index and a end index so we need to be carefull when we provide the end index cause,
  // we always need to give the last index+1 to get the exact element.

   let subarray = numbers.slice(1,4) // return a new array, just give the index of the first element and take the element you want and add one to its index to get the desired part.
   alert(subarray)
   // splice would be helping us to remove elements from the array like a specific portion.
   // one key thing to understand here is that splice would be returing a new array with the element we needed and also would be removing those elements from the original array as well.

    // [1,2.3,4,5] splice(1,3) -> [2,3,4]
     //original array [1,5]
      const nums = [1,2,3,4,5]
    const splicearray = nums.splice(1,3)
    alert(splicearray)
    alert(nums)


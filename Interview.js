
 const string = "1122233344566669"

 function nonrepeat(){
    let freqencymap = {};
    for(element of string){
        if(freqencymap[element]){
           freqencymap[element] = freqencymap[element] + 1
        }
        else{
           freqencymap[element] = 1
        }
     }
     for(nonrepeatcharacter in freqencymap){
        if(freqencymap[nonrepeatcharacter] === 1){
            return nonrepeatcharacter
        }
     }
     return -1
      
 } 

 //console.log(nonrepeat())

 // for an array
 // const testarr = ['fenil','fenil','ayush','fenil']

  function nonrepeatarrayelement(){
    const testarr = ['fenil','fenil','ayush','fenil']
    const freqencymap ={}
     for(element of testarr){
       if(freqencymap[element]){
        freqencymap[element] = freqencymap[element]+1
       }
       else{
        freqencymap[element] = 1
       }
     }
     for(nonrepeatelement in freqencymap){ // for..of only work on iterables and not on plain objects for that we have to use for..in
       if(freqencymap[nonrepeatelement] === 1){
        return nonrepeatelement
       }
     }
     return -1
  }
//console.log(nonrepeatarrayelement())



// Given a array of integers we got to return the indices of two number
// adding up the specific target.

//][2,7,11,15] -> target = 9 answer [0,1]


// max from an array

function maxfromarray(){
   const testarray = [5,1,9,3,7,100,50000]
   let maxnumber = testarray[0]
   for(i = 0;i<testarray.length;i++){
      if(testarray[i]>maxnumber){
         maxnumber = testarray[i];
      }
   }
   return maxnumber
}

//console.log(maxfromarray())

/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/



// expect(5).tobe(4) -> {"value":false}


 function expect(val){
    var result= {};
    return {
      tobe: function(expected){
         if(val==expected){
            return result={"value":true}
         }
         else{
           return result = {"value":"Not equal"}
         }
      },
      notobe: function(expected){
          if(val!=expected){
            return result = {"value":true}
          }
          else{
            return result= {"value":"not equal"}
          }
      }
    }
 }

 console.log(expect(5).tobe(5))
 console.log(expect(5).notobe(5))


/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

function createCounter(integer){
   var temp = integer
   return {
      increment : function(){
         temp++
         return this
      },
      decrement: function(integer){
         temp--
         return this
      },
      reset : function(){
         temp = integer
         return this
      },
      getvalue :function(){
         return temp
      }
   }
}
// here to peform chain operations we are using the this keyword to get the object instead of the value so that we can
// perform the other operations on the object efficiently, without that we wont be able to perfrom chain operations instead we have to do it
// individually.

const counter = createCounter(5)
counter.increment().decrement().increment().decrement().decrement()
console.log(counter.getvalue())

// 6,5,6,5,4,5

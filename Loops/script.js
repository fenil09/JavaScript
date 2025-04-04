
// For while and Do while loops.
// used For if we know how many times exactly we need to loop
for(let i =1; i<=10;i++){
 console.log('fenil'+ i)
}

// while should be used when we know the exact condition but we do not know how many iterations


 let ip=0
 let home = 10
 while(ip!=home){
    ip++
    console.log("value increase"+ip)
 }

 // DO while loop is similar to while loop the only difference is that It would be executed the code or logic and then
 // go back to check the condition.

 // creating a game where we would be having a number and we would want user to guess the number and the game would work
 // until the user guess the exact number and also giving the user the ability to give up

  let number = 50
  do {
    var userinput = prompt("Guess the number");
     if(userinput === 'quit'){
        console.log(' you are quitting the game')
        break;
     }
     else{
        continue;
     }
  } while(userinput != number)
     if(userinput==number && userinput!='quit'){
        console.log('you won')
     }
    

     /*
     10
     != quit so continue
     while(10!=50)
     */
   
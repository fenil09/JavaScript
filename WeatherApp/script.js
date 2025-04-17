// setting up an event listener for the button that the user would click on the frontend.

const button = document.getElementById('search')
const input = document.getElementById('cityinput')
// setting up an event listner on the button.




async function getdata(cityname){
    let datafromAPI = await fetch(`http://api.weatherapi.com/v1/current.json?key=5fdd755b99d44ca888491524251104&q=${cityname}&aqi=no`)
  
    return await datafromAPI.json()
   }
  
button.addEventListener("click", async()=>{
    // setting up the task we want to perform.
   const cityinput = input.value
   const result = await getdata(cityinput)
   console.log(result)
})

// Setting up the function to get data from the API

 

 

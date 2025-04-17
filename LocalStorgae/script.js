// One important thing about local storage is that here the data is stored in the form of key and value pairs.


const input = document.getElementById('name')
const button = document.getElementById('store')


button.addEventListener('click',() => {
    console.log('hey its me')
    const inputvalue = input.value
    // storing the value in the local storage
    localStorage.setItem("name",inputvalue)
})

alert("hey")
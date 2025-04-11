// The tasks which are executed in a sequence like whose outcome is instant can be
// seen as synchronous tasks. whereas the ones which takes some time for returning the response, does not follow any order of execution can be seen as 
// asynchronous tasks.

// The outcome of the asynchronous task would be a promise.

// In general time promise means that as soon as the async function has a result it would return it which is the general meaning of a promise.


async function getdata() {
    let datafromserver = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(await datafromserver.json())
}

getdata()
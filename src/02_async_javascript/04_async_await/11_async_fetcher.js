/*
Problem: Implement an Asynchronous Data Fetcher
Create a function called fetchData that takes a URL and an 
optional delay in milliseconds. The function should return a Promise 
that fetches data from the URL after the given delay and parses it as JSON. 
Use async/await and the native fetch API.

Requirements:
- the function should have a default delay of 0 milliseconds if not provided
- Use setTimeout to implement the delay
- use async/await and fetch to get the data from the URL and parse it as JSON.
*/
async function fetchData(url, delay = 0) {
    return new Promise(async (resolve, reject)=> {
        try{
            const response = await fetch(url);
            const data =await response.json();
            setTimeout(()=> resolve(data), delay)
        }
        catch(error){
            reject(error)
        }
    })   
}

module.exports = fetchData;
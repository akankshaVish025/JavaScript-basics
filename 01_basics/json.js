// https://jsonplaceholder.typicode.com/users
async function myFun() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();
    console.log(result, "data");
    return result
}

myFun();
const accountId = 144553
let accountEmail = "akanksha@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope....   // scope - {}
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
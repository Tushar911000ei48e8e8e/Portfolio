const accountId = 1234532
let accountEmail = "tushar@gmail.com"
var AccountPassword = "72457249"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "gg@gg.com"
AccountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId)
/*

prefer not  to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,AccountPassword,accountCity,accountState])
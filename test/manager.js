var M =module.exports = {}

var ccc ={id:"ccc",password:"1234567"}
var nnn ={id:"nnn",password:"7654321"}

var userMap = {
    "ccc":ccc,
    "nnn":nnn
}


 M.login = function (id,password) {
    var user = userMap[id]
    if (user.password === password)
        return user
 }

// var user1 = M.login("ccc","111")
// console.log("user1=%j",user1)
// var user2 = M.login("ccc","1234567")
// console.log("user2=%j",user2)
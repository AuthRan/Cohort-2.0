// Jwt generation, decoding, verification
const jwt = require('jsonwebtoken')


//Data to create jwt
const data = {
    name : "Ashutosh Ranjan",
    rollNum : "B230006CS"
}

//Generating
const token = jwt.sign(data, "secret")

//Verification
const result = jwt.verify(token, "secret")
console.log(token)
console.log(result)
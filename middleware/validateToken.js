const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
const jwt = require('jsonwebtoken')
function validateToken(token ){
    jwt.verify(token, JWT_SECRET)
    return jwt.verify(token, JWT_SECRET);
}



module.exports = validateToken
const jwt = require("jsonwebtoken")
const tokenSecret = require("./jwt_secret")
const secret = tokenSecret.jwt_secret

module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        jwt.verify(token, secret,(err, decodedToken) => {
            if(err){
                res.status(401).json({denied: "Authorization was not valid"})
            }else{
                req.decodedToken = decodedToken;
                next()
            }
        } )
    }else{
        res.status(401).json({denied: "Please Log-in"})
    }
}
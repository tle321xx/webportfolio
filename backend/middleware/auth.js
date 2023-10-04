const jwt = require('jsonwebtoken')

TOKEN_KEY="qwertyuiop"
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if(!token) {
        return res.status(403).send('A token is required')
    }

    try {
        const decoded = jwt.verify(token, TOKEN_KEY)
        req.user = decoded
        next()
    } catch (err){
        return res.status(401).send("Invalid Token")
    }
    
}

module.exports = verifyToken
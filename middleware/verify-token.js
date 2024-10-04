const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    try{
        // verify the token, open it up, and then assign the payload (who the suer is) to req.user, so our controller function knows who is making the request
        const token = req.headers.authorization.spliy(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //assign the payload (decoded token) to req.user
        req.user = decoded.user
        //proceed to the controller function
        next()

    }catch(err){
        console.log(err)
        res.status(401).json({error: "Invalid Token. Please Log In"})
    }

}

module.exports = verifyToken
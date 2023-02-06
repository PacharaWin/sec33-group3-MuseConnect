const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

/*
[Use requireAuth in the routers that require authentication] for routes protection
Example:
'''
const router = express.Router()
router.use(requireAuth)
const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)
router.get('/', ...)
'''
*/

const requireAuth = async (req, res, next) => {
    // verify user is authenticated
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }
    
    const token = authorization.split(' ')[1]
    
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        
        req.user = await User.findById(id);
        next()
    }
}

module.exports = requireAuth

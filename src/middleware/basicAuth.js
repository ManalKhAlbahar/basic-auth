'use strict'

const bcrypt = require('bcrypt');
const { signUser } = require('../models/index.js');
const base64 = require('base-64');

const basicAuth = async (req,res , next) => {
    if(req.headers['authorization']) {
        let basicHeaderParts= req.headers.authorization.split(' ');
        let encodedPart = basicHeaderParts.pop(); 
        let decoded = base64.decode(encodedPart);
        let [username,password]= decoded.split(':');
        try {
            const user = await signUser.findOne({where:{username:username}});
            const validPass = await bcrypt.compare(password,user.password);
            if(validPass) {
                req.user= user
                next();
            } else {
                res.send('user is not valid')
            }
        } catch(error) {
            res.send(error)
        }
    }
}

module.exports = basicAuth;
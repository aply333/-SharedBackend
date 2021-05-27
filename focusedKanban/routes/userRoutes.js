const express = require("express");
const router = express.Router();
const userModel = require("../models/usersModel")
const bcrypt = require("bcryptjs");
const tokenGenerate = require("../auth/generateToken");

router.route("/").get((req, res) => {
    res.status(200).json({location: "At users root."})
})

router.route("/login").post(async (req, res)=>{
    try{
        const { email, password } = req.body
        const user = await userModel.findUser(email)
        const hashCheck = await bcrypt.compare(password, user.hash)
        if(hashCheck){
            const token = tokenGenerate(user)
            const returnedUser = {
                user_id: user.user_id,
                name : user.username,
                email: user.email
            }
            res.status(200).json({token: token, user: returnedUser})
        }else{
            res.status(503).json({denied: "Not Authorized"})
        }
    }catch(err){
        res.status(404).json({Status: "User was not found.", err: err})
    }

})

router.route("/register").post(async (req, res) => {
    try{
        const newUser = req.body.newUser
        const updateUsers = await userModel.registerNewUser(newUser)
        const token = tokenGenerate(updateUsers)
        const returnedUser = {
            user_id: updateUsers.user_id,
            name: updateUsers.username,
            email: updateUsers.email
        }
        res.status(200).json({token: token, user: returnedUser})
    }catch(err){
        res.status(404).json({status: "Failed to register user.", error: err})
    }
})

module.exports = router;
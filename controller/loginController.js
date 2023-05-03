


const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const USER = mongoose.model('user')

exports.login = async (req, res) => {
    try {
        let userInfo = await USER.findOne({
            email: req.body.email,
        });
        if (userInfo) {
            if (req.body.password !== userInfo.password) {
                return badRequestResponse(res, {
                    message: "Authentication failed. Wrong password.",
                });
            }
            userInfo = JSON.parse(JSON.stringify(userInfo));
            delete userInfo["password"];
            // create a token
            var token = jwt.sign(userInfo, process.env.secret, {
                expiresIn: "2m", // expires in 24 hours
            });
            return res.json({
                data: {
                    isSuccess: true,
                    message: "You are logged in successfully!",
                    token,
                    userInfo,
                }
            })
        }
        return res.json({
            isSuccess: false,
            message: "Email not found!",
        })
    } catch (error) {
        return res.json({
            isSuccess: false,
            error
        })
    }
}


exports.ragister = async (req, res) => {
    try {
        if (req.body.password == req.body.confirm_password) {
            const findUser = await USER.findOne({email: req.body.email})
            if(!findUser){
                const isCreateduSER = await USER.create(req.body);
                if (!isCreateduSER) {
                    return res.json({
                        isSuccess: false,
                        message: "Failed to add User"
                    })
                }
                return res.json({
                    isSuccess: true,
                    message: "User addedd successfully",
                    data: isCreateduSER
                })
            } else {
                return res.json({
                    error: true,
                    isSuccess: false,
                    message: "User Alredy Created"
                })
            }
        }
        else {
            return res.json({  
                isSuccess: false,
                message: "password and confirm password should be same" });
        }
    } catch (error) {
        return res.json({
            isSuccess: false,
            error
        })
    }
}
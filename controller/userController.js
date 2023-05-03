


const mongoose = require('mongoose')
const USER = mongoose.model('user')


exports.fetchUsers = async (req, res) => {
    try {
        const allUser = await USER.find({})
        if (allUser) {
            return res.json({
                isSuccess: true,
                data: allUser
            })
        } else {
            return res.json({
                isSuccess: false,
                message: "User Not Found"
            })
        }
    } catch (error) {
        return res.json({
            isSuccess: false,
            error
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await USER.findById({_id: req.body.id})
        if (user) {
            await USER.findByIdAndDelete({_id: req.body.id})
            const alluser = await USER.find({})
            return res.json({
                isSuccess: true,
                message: "User delete successfully",
                data: alluser
            })
        } else {
            return res.json({
                isSuccess: false,
                message: "User Not Found"
            })
        }
    } catch (error) {
        return res.json({
            isSuccess: false,
            error
        })
    }
}


exports.updateUser = async (req, res) => {
    try {
        const user = await USER.findById({_id: req.body.id})
        if (user) {
            await USER.findByIdAndUpdate({_id: req.body.id}, req.body)
            const alluser = await USER.find({})
            return res.json({
                isSuccess: true,
                message: "User delete successfully",
                data: alluser
            })
        } else {
            return res.json({
                isSuccess: false,
                message: "User Not Found"
            })
        }
    } catch (error) {
        return res.json({
            isSuccess: false,
            error
        })
    }
}


exports.addUser = async (req, res) => {
    try {
        if (req.body.password == req.body.confirm_password) {
            const findUser = await USER.findOne({email: req.body.email})
            if(!findUser){
                const isCreateduSER = await USER.create(req.body);
                const allUser = await USER.find({});
                if (!isCreateduSER) {
                    return res.json({
                        isSuccess: false,
                        message: "Failed to add User"
                    })
                }
                return res.json({
                    isSuccess: true,
                    message: "User addedd successfully",
                    data: allUser
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
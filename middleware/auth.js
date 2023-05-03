"use strict";
const jwt = require("jsonwebtoken");

const allowedUrls = [
    "/login",
    "/ragister",
];

// const adminUrls = ['/add']

// const superadminUrls = ["/get-all-user","/add","/Upadate","/delete","/get-by-id","/add-student","/get-all-student","/update-studentt","/delete-student","/get-student-id"];
const adminUrls = ["/get-all-user", ,"/delete-user", "/update-user", "/add-user"]
const userUrls = ["/get-all-user", "/update-user"]
// const guestUrls = ["/get-all","/get-all-student"]

const ensureAuthorized = (req, res, next) => {
    if (allowedUrls.indexOf(req.path.toLowerCase()) !== -1) {
        return next();
    }
    const bearerHeader = req.headers["authorization"];
    if (
        !(typeof bearerHeader !== "undefined" && process.env.secret) ||
        !bearerHeader
    ) {
        return res.status(401).json({
            message: "Auth token not found",
            isSuccess: false,
        });
    }
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, process.env.secret, async function (err, decoded) {
        if (err) {
            return res.status(401).json({
                message: "Token Hase Been Expired",
                error: err,
                isSuccess: false,
            });
        } else {
            if((adminUrls.indexOf(req.path.toLowerCase()) !== -1 && decoded.roles.includes('admin'))){
                req.user = decoded;
                next();
            }
            else if((userUrls.indexOf(req.path.toLowerCase()) !== -1 && decoded.roles.includes('user'))){
                req.user = decoded;
                next();
            } else{
                return res.status(401).json({
                    message: "You have no permission to access this API",
                    error: err,
                    isSuccess: false,
                })
            }
        }
    });
};
module.exports = {
    ensureAuthorized,
};
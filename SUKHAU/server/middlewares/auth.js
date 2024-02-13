const express = require("express");
const ApiError = require("../Error/ApiError");
const JwtHelper = require("../helpers/jwtHelpers");
// const config = require("../);
const jwt = require("jsonwebtoken");
require('dotenv').config()
const auth = (...rules) => async (req, res, next) => {
    // console.log(req.body);
    try {
        const token = req.headers.authorization;
        console.log(token);

        if (!token) {
            throw new ApiError(404, "Token is not Found !!");
        }
        let verifiedUser;
        try {
            console.log(process.env.JWT_SCRET);
            verifiedUser = await JwtHelper.verifyToken(token, process.env.JWT_SCRET);
            console.log(verifiedUser);

        } catch (error) {
            console.log(error);

            throw new ApiError(403, "User is not Found !!");
        }
        req.user = verifiedUser;
        console.log(rules);
        console.log();
        // if (rules.length && !rules.includes(verifiedUser.role)) {
        //     throw new ApiError(403, "You are not Authorised !!");
        // }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = auth;

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const ApiError = require('../Error/ApiError');
const httpStatus = require('http-status');
const  JwtHelper = require('../helpers/jwtHelpers');
require("dotenv").config();
// const config = require('../../../config');
const { Secret } = require('jsonwebtoken');

// Assuming you have a mongoose model named UserModel
const UserModel = require('../model/Auth'); 

/**
 * Login user and generate an access token.
 * @param {Object} user - User information including email and password.
 * @returns {Promise<Object>} - Object containing accessToken and user details.
 */
const loginUser = async (user) => {
    // Input: user - User information including email and password
    const { email: IEmail, password } = user;

    // Check if the user exists
    const isUserExist = await UserModel.findOne({ email: IEmail });
console.log(isUserExist);
    if (!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "User is not Exist !");
    }

    // Check if the password matches
    const isPasswordMatched = await bcrypt.compare(password, isUserExist.password);

    if (!isPasswordMatched) {
        throw new ApiError(httpStatus.NOT_FOUND, "Password is not Matched !");
    }

    // Extract relevant user details
    const { email, _id, role, userId } = isUserExist;

    // Create an access token
    const accessToken = JwtHelper.createToken(
        { role, userId },
        process.env.JWT_SCRET,
       process.env.JWT_EXPIRES_IN
    );

    // Return the access token and user details
    return { accessToken, user: { role, userId } };
};

// Exported object containing the AuthService functions



module.exports = {
    loginUser
    
};

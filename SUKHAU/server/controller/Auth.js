const catchAsync = require("../shared/catchAsync");
const sendResponse = require("../shared/sendResponse");
const AuthService = require("./AuthService");
const UserModel=require('../model/Auth')
const bcrypt = require("bcrypt");
// const config = require("../../../config");

/**
 * Login user and send response.
 * @param {Object} req - Express Request object.
 * @param {Object} res - Express Response object.
 */
const Login = catchAsync(async (req, res) => {
    // Input: req - Express Request object
    // Input: req.body - Request body containing user login details
    console.log(req.body);

    const result = await AuthService.loginUser(req.body);
    // Output: result - Result of the user login, including accessToken

    const { accessToken } = result;

    const cookieOptions = {
        secure: process.env === 'production',
        httpOnly: true
    };
    // Set 'accessToken' cookie with secure and httpOnly options
    res.cookie('accessToken', accessToken, cookieOptions);

    sendResponse(res, {
        statusCode: 200,
        message: 'Successfully Logged !!',
        success: true,
        data: result,
    });
});
const signUp = async (req, res) => {
    try {
      // data fetch
      console.log(req.body);
      const {
      
        email,
        password,
       role
      } = req.body;
  // console.log("709277!firstName ||!lastName ||");
      // validate password
      if (
        !email ||
        !password ||
        !role
      ) {
        return res.status(403).json({
          success: false,
          message: "all fields are requied",
        });
      }

  
      //check user already exist or not
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already registered",
        });
      }
  
      //check most recent otp stored
    //   const recentOtp = await OTP.find({ email })
    //     .sort({ createdAt: -1 })
    //     .limit(1);
    //   console.log("recent otp" + recentOtp);
  
    //   //validate otp
    //   if (recentOtp.length=== 0) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "otp not found",
    //     });
    //   } else if (otp !== recentOtp[0].otp) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Invalid otp",
    //     });
    //   }
  
      //hash passord
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      // Create the user
    //   let approved = "";
    //   approved === "Instructor" ? (approved = false) : (approved = true);
  
      //entry create int db
    //   const profileDetails = await Profile.create({
    //     gender: null,
    //     dateOfBirth: null,
    //     about: null,
    //     contactNumber: null,
    //   });
    //   console.log(profileDetails);
    console.log(role);
      const user = await UserModel.create({
       
        email,
        password: hashedPassword,
        role,
        // additionalDetails: profileDetails._id,
        // image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
      });
  console.log(user);
      // return res
      return res.status(200).json({
        success: true,
        message: "user is registered successfully",
        user,
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        success: false,
        message: "user is not registered Please try again",
        error: error.message,
      });
    }
  };
// Exported object containing all authentication-related functions
module.exports = {
    Login,signUp
};

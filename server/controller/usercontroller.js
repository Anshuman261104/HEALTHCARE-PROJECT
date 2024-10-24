const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../modules/usermodel");
require("dotenv").config();


const registerUser = asyncHandler(async(req,res) => {
    const { email, name, dob, number } = req.body;

    //Check if all fields are provided
    if (!email || !name || !dob || !number) {
        res.status(400);
        throw new Error("Please provide all fields");
    } 

    // Check if user already exsists
    const userExsists = await User.findOne({email});
    if(userExsists) {
        return res.status(400).json({ message: "User already exsists"});
    }

    // Hash thr password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
        email,
        name,
        dob,
        number,
        password: hashedPassword,
    });

    res.status(201).json({ message: "User Registered Successfully",user});
});

// Export all controller functions
module.exports = {
    registerUser,
    // loginUser
};

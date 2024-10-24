const express = require("express");
const router = express.Router();

const{
    registerUser,
    // loginuser
} = require("../controller/usercontroller");


// Route for user registration
router.post("/", registerUser);

// Route for user login
// router.post("/login", loginUser);


module.exports = router;

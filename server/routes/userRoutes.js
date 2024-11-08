const { validateJwtToken } = require("../middleware/jwtMiddleware"); 
const express=require("express");
const router=express.Router();

const{
    registerUser,
    loginUser
}=require("../controllers/userController");


router.post("/register", validateJwtToken, registerUser);
router.post("/login", validateJwtToken,loginUser);
module.exports=router;
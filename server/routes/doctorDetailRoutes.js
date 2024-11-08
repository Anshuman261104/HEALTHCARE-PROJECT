const express = require("express");
const router = express.Router();

const {
    registerDoctor
} = require("../controllers/doctorDetailController");
const { validateJwtToken } = require("../middleware/jwtMiddleware");

router.post("/register", validateJwtToken,registerDoctor);

// router.post("/login",loginUser);

module.exports = router;
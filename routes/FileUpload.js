const express = require("express");
const router = express.Router();  // Corrected this line
const { localFileUpload } = require("../controllers/fileUpload");

router.post("/localFileUpload", localFileUpload);

module.exports = router;

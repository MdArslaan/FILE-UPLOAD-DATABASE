// Add App 
const express = require("express");
const app = express();

// Add Port
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Add Middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// Database Connection
const db = require("./config/database");
db.connect();

// Cloudinary Connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryconnect(); // Ensure this matches the actual function name

// Routes
const upload = require("./routes/FileUpload");
app.use("/api/v1/upload", upload); // Added leading slash

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

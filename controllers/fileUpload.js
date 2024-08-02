const File = require("../models/File");

// localFileUpload -> handler function
exports.localFileUpload = async (req, res) => {
    try {
        // fetch file
        const file = req.files.file;
        console.log("FILE AAGYI JEE ->", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH -> ", path);

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success: true,
            message: 'Local File Uploaded Successfully',
        });

    } catch (error) {
        console.log(error);
    }
};

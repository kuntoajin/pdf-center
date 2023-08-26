const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path')

global.__basedir = __dirname;

const app = express()
const port = 9966

const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors())

// const initRoutes = require("./routes");

// initRoutes(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/resource"))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "/resource/static/uploads"));
    },
    // konfigurasi penamaan file yang unik
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1]; console.log(file.mimetype)
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname) + '.' + extension
        );
    },
});

app.post('/upload', multer({ storage }).single("file"),
    (req, res) => {
        const file = req.file.path;
        if (!file) {
            res.status(400).send({
                status: false,
                data: "No File is selected.",
            });
        }
        console.log(req.file)
        res.json({
            file: 'http://localhost:9966/static/uploads/' + req.file.filename
        })
    }
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
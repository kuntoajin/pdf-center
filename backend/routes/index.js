const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const pdfService = require('../services/pdf-service')
const controller = require("../controller/controller");
const multer = require('multer');

const router = express.Router()
const jsonParser = bodyParser.json()

// router.get('/test', (req, res, next) => {
//     const stream = res.writeHead(200, {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attacgment;filename=test.pdf'
//     })

//     pdfService.buildPDF(
//         (chunk) => stream.write(chunk),
//         () => stream.end()
//     )
// })

// router.post('/upload', jsonParser,  (req, res, next) => {
//     console.log(req.body)
//     res.json(req.body)
// })
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "resource/static/uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let routes = (app) => {
  router.post("/upload", multer({ storage: diskStorage }).single("file"),
    (req, res) => {
      const file = req.file.path;
      console.log(file);
      if (!file) {
        res.status(400).send({
          status: false,
          data: "No File is selected.",
        });
      }
    }
  );
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;

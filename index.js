const express = require('express')
const fs = require('fs')
const blobStream = require('blob-stream');

const PDFDocument = require('pdfkit')
const doc = new PDFDocument

const stream = doc.pipe(blobStream());

const app = express()
const port = 3000

app.get('/', (req, res) => {
    doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
    doc.pipe(fs.createWriteStream('./test.pdf'))
    doc.pipe(res)
    doc.end();
    stream.on('finish', function () {
        // get a blob you can do whatever you like with
        const blob = stream.toBlob('application/pdf');

        // or get a blob URL for display in the browser
        const url = stream.toBlobURL('application/pdf');
        iframe.src = url;
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
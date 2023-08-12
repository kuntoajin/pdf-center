const PDFDocument = require('pdfkit')
const doc = new PDFDocument()

function buildPDF(dataCallback, endCallback) {
    doc.on('data', dataCallback)
    doc.on('end', endCallback)
    doc
        .fontSize(25)
        .text('Some Heading')
    doc.end()
}

module.exports = { buildPDF }
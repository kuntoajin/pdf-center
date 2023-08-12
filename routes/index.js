const express = require('express')
const pdfService = require('../services/pdf-service')

const router = express.Router()
router.get('/test', (req, res, next) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attacgment;filename=test.pdf'
    })

    pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    )
})

module.exports = router
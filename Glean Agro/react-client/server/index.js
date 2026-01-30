const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000
const TARGET = process.env.TARGET_PHP_URL || process.env.RENDER_PHP_URL || 'http://localhost:8000'

app.use(cors())
app.use(express.text({ type: '*/*', limit: '10mb' }))

// Proxy any method to the PHP target. Route: /api/* -> TARGET/*
app.all('/api/*', async (req, res) => {
    try {
        const path = req.params[0] ? req.path.replace(/^\/api\//, '') : req.path
        const url = new URL(req.originalUrl.replace(/^\/api\//, ''), TARGET)
        // If originalUrl included query string, node-fetch will handle it via url
        const targetUrl = `${TARGET.replace(/\/$/, '')}/${req.originalUrl.replace(/^\/api\//, '')}`

        const opts = {
            method: req.method,
            headers: Object.assign({}, req.headers)
        }

        // Remove host header to avoid host mismatches
        delete opts.headers.host

        if (req.method !== 'GET' && req.method !== 'HEAD') {
            opts.body = req.body
        }

        const resp = await fetch(targetUrl, opts)
        const contentType = resp.headers.get('content-type') || 'text/html'
        const text = await resp.text()
        res.status(resp.status)
        res.set('content-type', contentType)
        res.send(text)
    } catch (err) {
        console.error('Proxy error', err)
        res.status(502).send('Bad gateway')
    }
})

app.listen(PORT, () => {
    console.log(`API proxy listening on ${PORT}, forwarding to ${TARGET}`)
})

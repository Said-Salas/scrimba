import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import 'dotenv/config'
import fetch from 'node-fetch'

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (req.url === '/api/gold-price' && req.method === 'GET') {
        try {
            if (!process.env.GOLD_API_KEY) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Server misconfigured" missing API KEY'} ))
                return
            }
            const apiResponse = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${process.env.GOLD_API_KEY}&base=EUR&currencies=EUR,XAU,XAG`)
            if (!apiResponse.ok) {
                const text = await apiResponse.text()
                res.writeHead(apiResponse.status, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Upstream API error', detail: text}))
                return
            }
            const data = await apiResponse.json()
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data))
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify( { error: 'Failed to fetch gold price' }))
        }
        return
    }
    return await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
import http from 'node:http'

const PORT = 8000

const server = http.createServer(async (req, res) => {

})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
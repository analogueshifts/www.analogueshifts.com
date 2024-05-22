const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3001
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            console.log('Request URL:', req.url)
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            if (pathname === '/a') {
                console.log('Rendering /a')
                await app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
                console.log('Rendering /b')
                await app.render(req, res, '/b', query)
            } else {
                console.log('Handling request with default handler')
                await handle(req, res, parsedUrl)
            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('Internal Server Error')
        }
    }).listen(port, err => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})

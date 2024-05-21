const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT, 10) || 3210

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        createServer(async (req, res) => {
            try {
                const parsedUrl = parse(req.url, true)
                const { pathname, query } = parsedUrl

                if (pathname === '/a') {
                    await app.render(req, res, '/a', query)
                } else if (pathname === '/b') {
                    await app.render(req, res, '/b', query)
                } else {
                    await handle(req, res, parsedUrl)
                }
            } catch (err) {
                console.error('Error occurred handling', req.url, err)
                res.statusCode = 500
                res.end('Internal Server Error')
            }
        })
            .once('error', err => {
                console.error('Server error:', err)
                process.exit(1)
            })
            .listen(port, () => {
                console.log(`> Ready on http://${hostname}:${port}`)
            })
    })
    .catch(err => {
        console.error('Error during app preparation:', err)
        process.exit(1)
    })

// Additional logging
process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err)
    process.exit(1)
})

process.on('unhandledRejection', err => {
    console.error('Unhandled Rejection:', err)
    process.exit(1)
})

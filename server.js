const path = require('path')
const next = require('next')
const { startServer } = require('next/dist/server/lib/start-server')

const dir = path.join(__dirname)

process.env.NODE_ENV = 'production'
process.chdir(__dirname)

const currentPort = parseInt(process.env.PORT, 10) || 9001
const hostname = process.env.HOSTNAME || '0.0.0.0'

let keepAliveTimeout = parseInt(process.env.KEEP_ALIVE_TIMEOUT, 10)
if (
    Number.isNaN(keepAliveTimeout) ||
    !Number.isFinite(keepAliveTimeout) ||
    keepAliveTimeout < 0
) {
    keepAliveTimeout = undefined
}

const nextConfig = {
    // Your existing config
}

process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig)

startServer({
    dir,
    isDev: false,
    config: nextConfig,
    hostname,
    port: currentPort,
    allowRetry: false,
    keepAliveTimeout,
}).catch(err => {
    console.error('Failed to start server:', err)
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

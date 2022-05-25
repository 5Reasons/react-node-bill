const server = require('pushstate-server')

server.start({
  port: 7711,
  directory: './dist'
})
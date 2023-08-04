import fastify from 'fastify'

import routes from '@infra/http/routes'

const server = fastify({
  logger: true
})

server.register(routes)

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`CWG server is running at ${address}!`)
  console.log(server.printRoutes())
})

export { server }

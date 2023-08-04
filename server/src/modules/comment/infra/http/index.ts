import { RouteOptions } from 'fastify/types/route'

export default [
  {
    method: 'GET',
    url: '/comment',
    handler: async (_, reply) => {
      reply.send({ hello: 'world' })
    },
  },
] as RouteOptions[]

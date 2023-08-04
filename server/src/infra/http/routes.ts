import type { RouteOptions } from 'fastify/types/route'
import type { FastifyInstance } from 'fastify'

import commentRoutes from '@modules/comment/infra/http'

export default function (instance: FastifyInstance, _: unknown, done: () => void) {
  commentRoutes.forEach((route: RouteOptions) => {
    instance.route(route)
  })
  done()
}

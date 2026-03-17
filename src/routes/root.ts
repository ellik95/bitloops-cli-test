import type { FastifyInstance } from 'fastify';
import { getRootHandler } from '../handlers/root';

export async function registerRootRoutes(app: FastifyInstance) {
  app.get('/', {
    schema: {
      response: {
        200: {
          type: 'string',
        },
      },
    },
    handler: getRootHandler,
  });
}

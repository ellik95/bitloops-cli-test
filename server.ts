import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const app = Fastify();

await app.register(swagger, {
  openapi: {
    info: {
      title: 'My API',
      version: '1.0.0',
    },
  },
});

await app.register(swaggerUi, {
  routePrefix: '/docs',
});

app.get('/', {
  schema: {
    response: {
      200: {
        type: 'string',
      },
    },
  },
  handler: async () => {
    return 'Hello World';
  },
});

await app.listen({ port: 3000 });
console.log('Server running at http://localhost:3000');
console.log('Swagger UI at http://localhost:3000/docs');

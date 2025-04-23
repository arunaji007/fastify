import fastify from 'fastify';
import { datasource } from './data-source';
import { routes } from './routes';
import { AppDataSource } from '../configurations/data-source';
import { User } from '../entity/User';
import fastifySwagger from './swagger';

export async function createServer() {
  const server = fastify();

  await server.register(datasource);
  await server.register(fastifySwagger);

  server.get('/health', async (request, reply) => {
    reply.send({ message: 'pong' });
  });

  await server.register(routes);
  await server.ready();
  server.swagger();
  server.listen({ port: 8080, host: '0.0.0.0' }, async (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

import { FastifyInstance } from 'fastify';
import { AppDataSource } from '../configurations/data-source';
import { User } from '../entity/User';

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export async function routes(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    return users;
  });

  // POST: Create a new user
  fastify.post('/users', async (request, reply) => {
    const { firstName, lastName, email } = request.body as Partial<User>;
    const userRepository = AppDataSource.getRepository(User);
    if (!firstName || !lastName || !email) {
      return reply.status(400).send({ message: 'Missing required fields' });
    }

    const newUser = userRepository.create({ firstName, lastName, email });
    const savedUser = await userRepository.save(newUser);

    reply.status(201).send(savedUser);
  });
}

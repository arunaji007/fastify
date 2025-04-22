import { FastifyInstance } from 'fastify';
import { AppDataSource } from '../configurations/data-source';

export async function datasource(fastify: FastifyInstance) {
  await AppDataSource.initialize();
}

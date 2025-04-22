import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/User';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_URL,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['src/database/migrations/*.{ts,js}'],
  subscribers: [],
});

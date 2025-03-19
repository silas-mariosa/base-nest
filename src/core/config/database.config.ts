import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { UserOrmEntity } from 'src/modules/user/infrastructure/persistence/user.orm.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Pode ser mysql, mariadb, sqlite, etc.
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'mydatabase',
  entities: [UserOrmEntity], // Registre as entidades aqui
  synchronize: true, // ⚠️ Apenas para desenvolvimento! No produção, use migrações
};

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryImpl } from './infrastructure/persistence/user.repository.impl';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserOrmEntity } from './infrastructure/persistence/user.orm.entity';
import { CreateUserUseCase } from './application/create-user';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}

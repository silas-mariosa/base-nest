import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.reposiroty';
import { UserOrmEntity } from './user.orm.entity';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async create(user: User): Promise<User> {
    const userEntity = this.userRepository.create({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.getPassword(),
    });
    const savedUser = await this.userRepository.save(userEntity);
    return new User(
      savedUser.id,
      savedUser.name,
      savedUser.email,
      savedUser.password,
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({ where: { email } });
    if (!userEntity) return null;
    return new User(
      userEntity.id,
      userEntity.name,
      userEntity.email,
      userEntity.password,
    );
  }
}

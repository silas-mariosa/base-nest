import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.reposiroty';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    const user = new User(Date.now().toString(), name, email, password);
    return this.userRepository.create(user);
  }
}

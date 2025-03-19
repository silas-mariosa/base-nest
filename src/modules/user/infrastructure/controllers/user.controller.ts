import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/create-user';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(
    @Body() body: { name: string; email: string; password: string },
  ) {
    return this.createUserUseCase.execute(body.name, body.email, body.password);
  }
}

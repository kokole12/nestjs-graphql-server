/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation((returns) => User, { name: 'user' })
  async createUser(
    @Args('createPetInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }

  @Query((returns) => User, { name: 'user' })
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.user(id);
  }

  @Mutation((returns) => [User], { name: 'delete_user' })
  async delete(@Args('id', { type: () => Int }) id: number): Promise<User[]> {
    return this.usersService.delete(id);
  }

  @Mutation((returns) => User, { name: 'update_user' })
  async update(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.update(id, updateUserInput);
  }
}

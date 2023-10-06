import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers() {
    return this.userService.findAll();
  }

  @Mutation(() => String)
  async createUser(@Args('name') name: string) {
    const user = new User();
    user.name = name;
    return this.userService.create(user);
  }
}

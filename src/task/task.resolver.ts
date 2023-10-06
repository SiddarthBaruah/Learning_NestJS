import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { UserService } from '../user/user.service';

@Resolver(() => Task)
export class TaskResolver {
  constructor(
    private taskService: TaskService,
    private userService: UserService,
  ) {}

  @Query(() => [Task])
  async getTasks() {
    return this.taskService.findAll();
  }

  @Mutation(() => String)
  async createTask(
    @Args('description') description: string,
    @Args('userId') userId: number,
  ) {
    const task = new Task();
    task.description = description;
    task.user = await this.userService.findOne(userId);
    return this.taskService.create(task);
  }
}

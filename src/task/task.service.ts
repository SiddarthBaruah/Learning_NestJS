import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
  }

  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }
}

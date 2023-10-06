import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['tasks'] });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id: id },
      relations: ['tasks'],
    });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}

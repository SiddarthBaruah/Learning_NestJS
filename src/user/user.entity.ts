import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('User')
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Task, (task) => task.user)
  @Field(() => [Task])
  tasks: Task[];
}

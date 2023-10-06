import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('Task')
export class Task {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.tasks)
  @Field(() => User)
  user: User;
}

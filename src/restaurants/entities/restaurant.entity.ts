//데이터 베이스의 모델이라고 생각하면 된다.

import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() //graphql로부터 받아온 ObjectType
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => String)
  @Column()
  name: string;
  @Field((type) => Boolean)
  @Column()
  isVegan: boolean;
  @Field((type) => String)
  @Column()
  address: string;
  @Field((type) => String)
  @Column()
  ownerName: string;
  @Field((type) => String)
  @Column()
  categoryName: string;
}

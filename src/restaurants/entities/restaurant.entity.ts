//데이터 베이스의 모델이라고 생각하면 된다.
// objectType, field => graphql type을 만들고 있고, entity, column 으로 db 테이블을 만들고 있음
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() //graphql로부터 받아온 ObjectType, for graphql
@Entity() //for typeOrm
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
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

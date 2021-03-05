//데이터 베이스의 모델이라고 생각하면 된다.
// objectType, field => graphql type을 만들고 있고, entity, column 으로 db 테이블을 만들고 있음
import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() //graphql로부터 받아온 ObjectType, for graphql
@Entity() //for typeOrm
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { nullable: true }) //graphql 스키마에서 이필드의 defaultValue 가 true
  @Column({ default: true }) // db에서 이 필드의 defaultValue 가 true
  @IsOptional() // 해당 필드를 보내거나 보내지 않을수 있다는것을 의미
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String, { defaultValue: '강남' })
  @Column()
  @IsString()
  address: string;

  @Field((type) => String)
  @Column()
  ownerName: string;

  @Field((type) => String)
  @Column()
  categoryName: string;
}

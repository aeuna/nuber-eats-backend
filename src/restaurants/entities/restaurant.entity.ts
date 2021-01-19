//데이터 베이스의 모델이라고 생각하면 된다.

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType() //graphql로부터 받아온 ObjectType
export class Restaurant {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean, { nullable: true })
  isGood?: boolean;
}

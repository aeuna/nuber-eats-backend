import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { createRestaurantDto } from './restaurant-create.dto';

@InputType()
class updateRestaurantInputType extends PartialType(createRestaurantDto) {}

@InputType()
export class updateRestaurantDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => updateRestaurantInputType)
  data: updateRestaurantInputType;
}

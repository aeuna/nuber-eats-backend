import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => [Restaurant]) // return type is for graphql
  myRestaurant(@Args('vegan') vegan: boolean): Restaurant[] {
    return [];
  }
}

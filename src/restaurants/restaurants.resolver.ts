import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/restaurant-create.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.sevice';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantServie: RestaurantService) {}
  @Query((returns) => [Restaurant]) // return type is for graphql
  myRestaurant(): Promise<Restaurant[]> {
    return this.restaurantServie.getAll();
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    return true;
  }
}

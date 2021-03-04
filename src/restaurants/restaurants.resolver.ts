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
  async createRestaurant(
    @Args() createRestaurantDto: createRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantServie.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

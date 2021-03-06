import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/restaurant-create.dto';
import { updateRestaurantDto } from './dtos/restaurant-update.dto';
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
    @Args('input') createRestaurantDto: createRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantServie.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  @Mutation((returns) => Boolean)
  //만약 inputType을 쓴다면 괄호안에 ('') arg 이름이 들어가야 한다
  // argsType을 쓴다면 괄호안에 arg이름이 들어가지 않아도 됨
  async updateRestaurant(
    @Args('input') updateRestaurantDto: updateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantServie.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query((returns) => Boolean) // return type is for graphql
  isPizzaGood(): Boolean {
    // return type is for ts
    return true;
  }
}

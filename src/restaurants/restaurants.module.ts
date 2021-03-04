import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurants.resolver';
import { RestaurantService } from './restaurants.sevice';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])], //forFeature은 tyepOrmModule가 특정 feature를 import할수있게 해줌
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}

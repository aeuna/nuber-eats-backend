import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createRestaurantDto } from './dtos/restaurant-create.dto';
import { updateRestaurantDto } from './dtos/restaurant-update.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) //Restaurant entity의 repository를 inject
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }
  createRestaurant(
    createRestaurantDto: createRestaurantDto,
  ): Promise<Restaurant> {
    const newRestaruant = this.restaurants.create(createRestaurantDto);
    return this.restaurants.save(newRestaruant);
  }
  updateRestaurant({ id, data }: updateRestaurantDto) {
    return this.restaurants.update(id, { ...data });
  }
}

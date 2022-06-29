import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from './dto/new-car.input';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addNewCar(newCarData: NewCarInput): Promise<Car> {
    try {
      const newCar = await this.carRepository.save(newCarData);
      console.log(newCar);
      return newCar;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}

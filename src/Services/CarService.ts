import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import IResponse from '../Interfaces/IResponse';
import { res, resError } from '../utils/response';

class CarService {
  private model: CarODM = new CarODM();

  static createDomain(car: ICar | null) {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async create(car: ICar): Promise<IResponse> {
    const newCar = await this.model.create(car);
    return res(201, CarService.createDomain(newCar));
  }

  async get(id?: string): Promise<IResponse> {
    if (id) {
      if (!isValidObjectId(id)) return resError(422, 'Invalid mongo id');
      const car = await this.model.getById(id);
      if (!car) return resError(404, 'Car not found');
      return res(200, CarService.createDomain(car));
    }
    const cars = await this.model.get();
    const carsDomains = cars.map((e) => CarService.createDomain(e));
    return res(200, carsDomains);
  }

  async update(id: string, car: Partial<ICar>) {
    if (!isValidObjectId(id)) return resError(422, 'Invalid mongo id');
    const updateCar = await this.model.update(id, car);
    if (!updateCar) return resError(404, 'Car not found');
    return res(200, CarService.createDomain(updateCar));
  }
}

export default CarService;
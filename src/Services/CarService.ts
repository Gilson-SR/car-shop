import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import IResponse from '../Interfaces/IResponse';
import { res } from '../utils/response';

class CarService {
  private model: CarODM = new CarODM();

  static createDomain(car: ICar) {
    return new Car(car);
  }

  async create(car: ICar): Promise<IResponse> {
    const newCar = await this.model.create(car);
    return res(201, CarService.createDomain(newCar));
  }
}

export default CarService;
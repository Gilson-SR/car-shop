import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import { res, resError } from '../utils/response';
import IResponse from '../Interfaces/IResponse';

class MotorcycleService {
  private model: MotorcycleODM = new MotorcycleODM();

  static createDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  async create(motorcycle: IMotorcycle): Promise<IResponse> {
    const newMotorcycle = await this.model.create(motorcycle);
    return res(201, MotorcycleService.createDomain(newMotorcycle));
  }

  async get(id?: string): Promise<IResponse> {
    if (id) {
      if (!isValidObjectId(id)) return resError(422, 'Invalid mongo id');
      const motorcycle = await this.model.getById(id);
      if (!motorcycle) return resError(404, 'Motorcycle not found');
      return res(200, MotorcycleService.createDomain(motorcycle));
    }
    const motorcycles = await this.model.get();
    const motorcyclesDomain = motorcycles.map((e) => MotorcycleService.createDomain(e));
    return res(200, motorcyclesDomain);
  }
}

export default MotorcycleService;
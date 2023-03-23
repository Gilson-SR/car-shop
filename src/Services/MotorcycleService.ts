import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import { res } from '../utils/response';

class MotorcycleService {
  private model: MotorcycleODM = new MotorcycleODM();

  static createDomain(motorcycle: IMotorcycle | null) {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return res(201, MotorcycleService.createDomain(newMotorcycle));
  }
}

export default MotorcycleService;
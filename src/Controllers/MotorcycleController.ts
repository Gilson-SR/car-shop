import { NextFunction, Response, Request } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private service: MotorcycleService = new MotorcycleService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.create(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.get(id);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, message } = await this.service.update(id, req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default MotorcycleController;
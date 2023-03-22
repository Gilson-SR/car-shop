import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private service: CarService = new CarService();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.create(req.body);
      res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default CarController;
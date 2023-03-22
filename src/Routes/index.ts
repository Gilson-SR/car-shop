import { IRouter, Router } from 'express';
import carRouter from './carRouter';

const router: IRouter = Router();

router.use(carRouter);

export default router;
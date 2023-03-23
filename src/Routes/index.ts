import { IRouter, Router } from 'express';
import carRouter from './carRouter';
import motorcycleRouter from './motorcycleRouter';

const router: IRouter = Router();

router.use(carRouter);
router.use(motorcycleRouter);

export default router;
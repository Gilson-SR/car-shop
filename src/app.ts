import express, { NextFunction, Request, Response } from 'express';
import router from './Routes/index';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json(err.message);
});

export default app;

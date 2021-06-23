import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';

import './database';

import 'express-async-errors';

import { routes } from './routes/routes';

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    let status: number = 400

    if (err.message.indexOf('existe') !== -1) status = 409
    if (err.message.indexOf('incorreto') !== -1) status = 404

      
    return res.status(status).json({
      error: err.message
    })
  }

  return res.status(500).json({
    error: 'internal Server Error'
  })
})

app.listen(PORT, () => {
  console.log(`⚡️Servidor:  https://localhost:${PORT}`);
});
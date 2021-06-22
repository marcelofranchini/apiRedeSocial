import 'reflect-metadata';
import express from 'express';

import './database';

import { routes } from './routes/routes';

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`⚡️Servidor:  https://localhost:${PORT}`);
});
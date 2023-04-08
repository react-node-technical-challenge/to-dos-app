require('dotenv').config();

import Joi from 'joi';
import cors from 'cors';
import express from 'express';
import authRoutes from './auth/routes';
import todosRoutes from './to-dos/routes';
import addUserToRequest from './shared/middlewares/add-user-to-request';
import { Environment } from './shared/model/environment';

validateEnvVariables();

const app = express();
const port = process.env.APP_PORT;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(addUserToRequest);
app.use(authRoutes);
app.use(todosRoutes);

export const server = app.listen(port, () => {
  console.log(`API initialized on port ${port}!`);
});

function validateEnvVariables(): void {
  const schema = Joi.object({
    ENV: Joi.valid(...Object.values(Environment)).required(),
    APP_PORT: Joi.number().required(),
    DATABASE_HOST: Joi.string().not().empty().required(),
    DATABASE_PORT: Joi.number().not().empty().required(),
    DATABASE_PASSWORD: Joi.string().not().empty().required(),
    DATABASE_NAME: Joi.string().not().empty().required(),
    DATABASE_USER: Joi.string().not().empty().required(),
  } satisfies Record<keyof typeof process.env, Joi.Schema>);

  const { error } = schema.validate(process.env, {
    allowUnknown: true,
  });

  if (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default app;

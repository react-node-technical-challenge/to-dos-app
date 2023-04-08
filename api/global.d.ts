import { Environment } from './src/shared/model/environment';

export {};

declare global {
  type Nil = null | undefined;

  type UserOfRequest = {
    id: string;
  };

  namespace Express {
    export interface Request {
      user?: UserOfRequest;
    }
  }

  namespace NodeJS {
    type ProcessEnv = {
      ENV: Environment;
      APP_PORT: string;
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      DATABASE_USER: string;
    };
  }
}

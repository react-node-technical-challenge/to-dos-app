import { Router } from 'express';

import signInRoute from './signIn';
import signUpRoute from './signUp';

const routes = Router();

routes.use(signInRoute);
routes.use(signUpRoute);

export default routes;
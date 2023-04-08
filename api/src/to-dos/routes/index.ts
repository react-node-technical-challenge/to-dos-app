import { Router } from 'express';

import createToDoRoute from './createToDo';
import deleteToDoRoute from './deleteToDo';
import markToDoAsCompletedRoute from './markToDoAsCompleted';
import markToDoAsUncompletedRoute from './markToDoAsUncompleted';
import getToDosOfUserOfRequestRoute from './getToDosOfUserOfRequest';

const routes = Router();

routes.use(createToDoRoute);
routes.use(deleteToDoRoute);
routes.use(markToDoAsCompletedRoute);
routes.use(markToDoAsUncompletedRoute);
routes.use(getToDosOfUserOfRequestRoute);

export default routes;
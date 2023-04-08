import express, { Request, Response } from 'express';
import StatusCode from 'status-code-enum';
import getTodosByUserId from '../services/getTodosByUserId';
import { ToDo } from '../model/todo';

const router = express.Router();

router.get('/to-dos', async (request: Request, response: Response<OutputDto>) => {
  const userOfRequest = request.user;

  if (!userOfRequest) {
    return response.status(StatusCode.ClientErrorUnauthorized).end();
  }

  const todos = await getTodosByUserId((userOfRequest as UserOfRequest).id);

  return response.send(todos);
});

export default router;

type OutputDto = ToDo[];

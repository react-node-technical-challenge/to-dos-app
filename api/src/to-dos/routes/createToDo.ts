import express, { Request, Response } from 'express';
import Joi from 'joi';
import StatusCode from 'status-code-enum';
import createToDo from '../services/createToDo';
import { ErrorDto } from '../../shared/dtos/error';

const router = express.Router();

router.post('/to-dos', async (request: Request, response: Response<OutputDto>) => {
  const userOfRequest = request.user;

  if (!userOfRequest) {
    return response.status(StatusCode.ClientErrorUnauthorized).end();
  }

  const toDoToCreate: InputDto = request.body;
  const validationResult = schema.validate(toDoToCreate);

  if (!!validationResult.error) {
    return response.status(StatusCode.ClientErrorUnauthorized).send({
      error: validationResult.error.message,
    });
  }

  const id = await createToDo({
    ...toDoToCreate,
    userId: userOfRequest.id,
    completed: false,
  });

  return response.status(StatusCode.SuccessCreated).send({ id });
});

export default router;

const schema = Joi.object({
  title: Joi.string().not().empty().required(),
});

type InputDto = {
  title: string;
};

type OutputDto =
  | ErrorDto
  | {
      id: number;
    };

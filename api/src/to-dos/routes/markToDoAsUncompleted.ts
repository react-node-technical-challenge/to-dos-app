import express, { Request, Response } from 'express';
import Joi from 'joi';
import StatusCode from 'status-code-enum';
import getTodoById from '../services/getTodoById';
import markToDoAsCompleted from '../services/markToDoAsCompleted';
import { ErrorDto } from '../../shared/dtos/error';

const router = express.Router();

router.put('/to-dos/:id/uncompleted', async (request: Request, response: Response<OutputDto>) => {
  const userOfRequest = request.user;

  if (!userOfRequest) {
    return response.status(StatusCode.ClientErrorUnauthorized).end();
  }

  const id: number = Number(request.params.id);
  const validationResult = schema.validate(id);

  if (!!validationResult.error) {
    return response.status(StatusCode.ClientErrorBadRequest).send({
      error: validationResult.error.message,
    });
  }

  const toDo = await getTodoById(id);

  if (!toDo) {
    return response.status(StatusCode.ClientErrorNotFound).end();
  }

  if (toDo.userId !== userOfRequest.id) {
    return response.status(StatusCode.ClientErrorForbidden).end();
  }

  await markToDoAsCompleted(toDo);

  return response.status(StatusCode.SuccessNoContent).end();
});

export default router;

const schema = Joi.number().required();

type OutputDto = ErrorDto;

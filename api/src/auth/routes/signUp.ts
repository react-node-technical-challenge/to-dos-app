import express, { Request, Response } from 'express';
import StatusCode from 'status-code-enum';

const router = express.Router();

router.post('/auth/sign-up', async (request: Request, response: Response<OutputDto>) => {
  return response.status(StatusCode.ServerErrorNotImplemented).end();
});

export default router;

type OutputDto = void;

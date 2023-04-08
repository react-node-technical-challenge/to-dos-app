import { Request, Response } from 'express';

export default function (request: Request, response: Response, next: any): void {
  request.user = {
    id: 'test',
  } as UserOfRequest;

  next();
}

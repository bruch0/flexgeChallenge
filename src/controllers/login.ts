import { Request, Response, NextFunction } from 'express';

import * as loginService from '@services/login';

const login = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
  try {
    const { email, password } = request.body;

    if (email === undefined || password === undefined) return response.status(400).send({ message: 'Invalid body' });

    const authString = loginService.login({ email, password });
    return response.status(200).send({ token: authString });
  } catch (error) {
    next(error);
  }
};

export { login };

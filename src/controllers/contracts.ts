import { Request, Response, NextFunction } from 'express';

import * as contractService from '@services/contracts';

const getAllContracts = async (_: Request, response: Response, next: NextFunction): Promise<any> => {
  try {
    await contractService.getAllContracts();
    return response.status(200).send({ message: 'Ok' });
  } catch (error) {
    next(error);
  }
};

export { getAllContracts };

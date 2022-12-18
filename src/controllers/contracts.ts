import { Request, Response, NextFunction } from 'express';

import * as contractService from '@services/contracts';

const getAllContracts = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
  try {
    const { skip } = request.query;
    if (typeof skip !== 'string') return response.status(403).send({ message: 'Invalid skip' });

    const data = await contractService.getAllContracts(skip);
    return response.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

const createContract = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
  try {
    await contractService.createContract(request.body);
    return response.status(200).send({ message: 'Created' });
  } catch (error) {
    next(error);
  }
};

export { getAllContracts, createContract };

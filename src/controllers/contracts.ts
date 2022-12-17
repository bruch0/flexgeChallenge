import { Request, Response, NextFunction } from 'express';

import * as contractService from '@services/contracts';

const getAllContracts = async (_: Request, response: Response, next: NextFunction): Promise<any> => {
  try {
    const contracts = await contractService.getAllContracts();
    return response.status(200).send(contracts);
  } catch (error) {
    next(error);
  }
};

export { getAllContracts };

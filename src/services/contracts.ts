import * as contractRepository from '@repositories/contracts';

import { Contracts } from '@interfaces/index';

interface ReturnType {
  contracts: Contracts[];
  count: number;
}

const getAllContracts = async (skip: string): Promise<ReturnType> => {
  const { contracts, count } = await contractRepository.getAllContracts(Number(skip));

  return { contracts, count };
};

export { getAllContracts };

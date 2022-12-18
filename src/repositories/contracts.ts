import { Contract } from '@db/schemas';

import { Contracts } from '@interfaces/index';

interface ReturnType {
  contracts: Contracts[];
  count: number;
}

const getAllContracts = async (skip: number): Promise<ReturnType> => {
  const contracts = await Contract.find().limit(10).skip(skip);
  const count = await Contract.find().count();

  return { contracts, count };
};

const createContract = async (body: Contracts): Promise<void> => {
  const newContract = new Contract(body);

  await newContract.save();
};

export { getAllContracts, createContract };

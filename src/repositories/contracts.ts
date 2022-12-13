import { Contracts } from './schemas';

const getAllContracts = async (): Promise<any> => {
  const contracts = await Contracts.find();

  return contracts;
};

export { getAllContracts };

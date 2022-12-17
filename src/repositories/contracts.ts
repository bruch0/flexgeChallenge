import { Companies } from '../db/schemas';

const getAllContracts = async (): Promise<any> => {
  const companies = await Companies.find();

  return companies;
};

export { getAllContracts };

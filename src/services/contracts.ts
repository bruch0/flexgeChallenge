import * as contractRepository from '@repositories/contracts';

const getAllContracts = async (): Promise<any> => {
  const contracts = await contractRepository.getAllContracts();
  console.log('oiw!');

  return contracts;
};

export { getAllContracts };

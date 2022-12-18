import * as contractSchema from '@services/schemas/contracts';
import * as contractRepository from '@repositories/contracts';

import Error from '@errors/genericError';

import { Contracts } from '@interfaces/index';

interface ReturnType {
  contracts: Contracts[];
  count: number;
}

const getAllContracts = async (skip: string): Promise<ReturnType> => {
  const { contracts, count } = await contractRepository.getAllContracts(Number(skip));

  return { contracts, count };
};

const createContract = async ({
  country,
  state,
  city,
  documentId,
  socialReason,
  address,
  district,
  number,
  zipcode,
  email,
  phone,
  startDate,
  endDate,
  dueDay,
  contractUrl,
  companyName,
  products,
}: Contracts): Promise<void> => {
  const validation = contractSchema.createContract.validate({
    country,
    state,
    city,
    documentId,
    socialReason,
    address,
    district,
    number,
    zipcode,
    email,
    phone,
    startDate,
    endDate,
    dueDay,
    contractUrl,
    companyName,
    products,
  });

  if (validation.error != null) {
    const errorMessage = validation.error.details[0].message;
    throw new Error('bodyValidation', errorMessage, 400);
  }

  await contractRepository.createContract({
    country,
    state,
    city,
    documentId,
    socialReason,
    address,
    district,
    number,
    zipcode,
    email,
    phone,
    startDate,
    endDate,
    dueDay,
    contractUrl,
    companyName,
    products,
  });
};

export { getAllContracts, createContract };

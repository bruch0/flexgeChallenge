import mongoose from 'mongoose';

import { Companies } from './schemas';
import { seedDabatase } from './seedDatabase';

export const connectDatabase = async (): Promise<void> => {
  mongoose
    .connect('mongodb://db:27017/flexge_global')
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const initializeDatabaseContracts = async (): Promise<void> => {
  const contracts = await Companies.find();

  if (contracts.length === 0 && process.env.NODE_ENV === 'dev') await seedDabatase();
};

import mongoose from 'mongoose';

import { Contract } from './schemas';
import { seedDabatase } from './seedDatabase';

export const connectDatabase = async (): Promise<void> => {
  mongoose
    .connect('mongodb://db:27017/db_flexge')
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((error) => {
      console.log(error);
    });
};

mongoose.set('strictQuery', true);

export const initializeDatabaseContracts = async (): Promise<void> => {
  const contracts = await Contract.find();

  if (contracts.length === 0 && process.env.NODE_ENV === 'dev') await seedDabatase();
};

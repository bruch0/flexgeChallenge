import mongoose from 'mongoose';

import { Contract } from './schemas';
import { seedDabatase } from './seedDatabase';

export const connectDatabase = async (): Promise<void> => {
  mongoose
    .connect(
      `mongodb://${
        process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test' ? '127.0.0.1' : 'db'
      }:27017/db_flexge`
    )
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((error) => {
      console.log(error);
    });
};

mongoose.set('strictQuery', true);

export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.connection.close();
};

export const initializeDatabaseContracts = async (): Promise<void> => {
  const contracts = await Contract.find();

  if (contracts.length === 0 && process.env.NODE_ENV === 'dev') await seedDabatase();
};

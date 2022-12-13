import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  mongoose
    .connect('mongodb://db:27017/flexge')
    .then(() => {
      console.log('MongoDB Conectado');
    })
    .catch((error) => {
      console.log(error);
    });
};

import './setup';
import app from './app';
import { connectDatabase } from 'db/index';

connectDatabase()
  .then(() => app.listen(process.env.PORT))
  .catch((error) => console.log(error));

console.log('app is listening on', process.env.PORT);

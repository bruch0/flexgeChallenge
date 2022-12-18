import './setup';
import app from './app';
import { connectDatabase, initializeDatabaseContracts } from 'db/index';

connectDatabase()
  .then(async () => {
    await initializeDatabaseContracts();
    app.listen(process.env.PORT);
    console.log('app is listening on', process.env.PORT);
  })
  .catch((error) => console.log(error));

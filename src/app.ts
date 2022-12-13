import express from 'express';
import cors from 'cors';

import contractRouter from '@routers/contracts';

import auth from '@middlewares/authentication';
import errorHandler from '@middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use(auth);

app.use(contractRouter);

app.use(errorHandler);

export default app;

import express from 'express';
import cors from 'cors';

import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use(errorHandler);

export default app;

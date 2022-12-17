import { Router } from 'express';

import * as loginController from '@controllers/login';

const router = Router();

router.post('/login', loginController.login);

export default router;

import { Router } from 'express';

import * as contractController from '@controllers/contracts';

const router = Router();

router.get('/contracts', contractController.getAllContracts);
router.post('/contracts', contractController.createContract);

export default router;

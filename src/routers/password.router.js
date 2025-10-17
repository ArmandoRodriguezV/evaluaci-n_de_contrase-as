import { Router } from 'express';
import { evaluatePassword } from '../controllers/password.controller.js';
const router = Router();

router.post('/evaluate', evaluatePassword);

export default router;

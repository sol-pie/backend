import express from 'express';
import { healthCheckController } from '../controller/healthcheck.controller.js'

const router = express.Router();

router.get('/', healthCheckController.live.bind(healthCheckController));

export default router;
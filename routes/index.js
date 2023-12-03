import express from 'express';
import healthcheckRouter from './healthcheck.router.js';
import operationRouter from './operation.router.js'

const router = express.Router();

router.use('/api/healthcheck', healthcheckRouter);
router.use('/api/operations', operationRouter)

export default router;


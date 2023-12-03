import express from 'express';
import { operationController } from '../controller/operation.controller.js'

const router = express.Router();

router.get('/:operationId', operationController.getById);
router.get('/', operationController.getAll);


export default router;

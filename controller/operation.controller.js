
import OperationService from '../service/operation.service.js'

class OperationController {

    constructor(OperationService) {
        this.operationService = OperationService;
        this.operationService = this.operationService.bind(this);
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
    }

    async getById(req, res) {
        try {
            const operationService = new this.operationService();
            console.log('params', req.params.operationId)
            const operation = await operationService.getById(req.params.operationId);
            return res.json({ operation });
        } catch (e) {
            console.error(`OperationController.getById ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }

    async getAll(req, res) {
        try {
            const operationService = new this.operationService();
            const operations = await operationService.getAll();
            return res.json({ operations });
        } catch (e) {
            console.error(`OperationController.getAll ex ${e.message}`);
            return res.json({ error: e.message });
        }
    }
}

export const operationController = new OperationController(OperationService)

import { operationModel } from '../model/operation.model.js'

class OperationService {
    constructor() {
        this.getById = this.getById.bind(this);
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    async getById(id) {
        try {
            return await operationModel.findById(id).exec();
        } catch (e) {
            console.error(`OperationService.getById ex ${e}`);
            throw Error(e);
        }
    }

    async getAll() {
        try {
            return await operationModel.find({})
        } catch (e) {
            console.error(`OperationService.getAll ex ${e}`);
            throw Error(e);
        }
    }

    async create(body) {
        try {
            let operation = new operationModel({
              id: body.id,
              action: body.action,
              issuerDiscordId: body.issuerDiscordId,
            })
            let saved = await operation.save();
            console.log('operations saved:', saved);
        } catch (e) {
            console.error(`OperationService.create ex ${e}`);
            throw Error(e);
        }
    }

    async delete(id) {
        try {
            await cityModel.findByIdAndDelete(id)
        } catch (e) {
            console.error(`OperationService.delete ex ${e}`);
            throw Error(e);
        }
    }
}

export default OperationService;
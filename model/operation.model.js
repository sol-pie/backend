import mongoose from 'mongoose';

const OperationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    action: { type: String, required: true },
    issuerDiscordId: { type: String, required: true },
    holderDiscordId: { type: String, required: false },
    quantity: { type: Number, required: false },
    txId: { type: String, required: false },
    resultCode: { type: Number, required: false },
    resultText: { type: String, required: false },
}, {
    timestamps: true
});

export const operationModel = mongoose.model('Operation', OperationSchema);

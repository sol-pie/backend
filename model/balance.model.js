import mongoose from 'mongoose';

const BalanceSchema = new mongoose.Schema({
    holderDiscordId: { type: String, required: true },
    issuerDiscordId: { type: String, required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true
});

export const balanceModel = mongoose.model('Balance', BalanceSchema);

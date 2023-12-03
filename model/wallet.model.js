import mongoose from 'mongoose';

const WalletSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    wallet: { type: String, required: true },
}, {
    timestamps: true
});

export const walletModel = mongoose.model('Wallet', WalletSchema);

import mongoose from "mongoose";

const TransactionsModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome da transação é obrigatório']
    },
    value: {
        type: String,
        required: [true, 'O valor da transação é obrigatório']
    },
    description: String,
    revenue: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false})

export default mongoose.models.transactions || mongoose.model('transactions', TransactionsModel)
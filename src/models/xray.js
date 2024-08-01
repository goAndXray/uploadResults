import mongoose from "mongoose";

const xraySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    levelQuestion: {
        type: String,
        required: true,
    },
    firstQuestion: {
        type: String,
        required: true,
    },
    secondQuestion: {
        type: String,
        required: true,
    },
    thirdQuestion: {
        type: String,
        required: true,
    },
    finalResult: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model("Chat", xraySchema);
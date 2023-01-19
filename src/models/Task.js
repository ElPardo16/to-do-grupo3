import { Schema, model, models } from "mongoose";

const taskSchema = Schema({
    title: {
        type: String,
        maxLength: 50,
        require: true
    },
    updates: {
        type: Array,
        default: []
    },
    status: {
        type: Number,
        require: true
    }
},{
    versionKey: false
})

export default models.Task || model("Task", taskSchema)
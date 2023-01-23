import { Schema, model, models } from "mongoose";

// is the structure of the data that we are going to handle 
// and that allows us to make the queries, i.e. the CRUD.

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
        default: 0
    }
},{
    versionKey: false
})

export default models.Task || model("Task", taskSchema)
import Task from "../models/Task"

export const getTask = async _ => await Task.find()

export const saveTask = async taskReq => {
    const task = new Task(taskReq)
    await task.save()
}
export const deleteTask = async id => await Task.findByIdAndDelete(id)
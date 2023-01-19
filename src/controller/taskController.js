import Task from "../models/Task"

export const saveTask = async taskReq => {
    const task = new Task(taskReq)
    await task.save()
}
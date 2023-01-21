import Task from "../models/Task"

export const getTask = async _ => await Task.find()

export const saveTask = async taskReq => {
    const task = new Task(taskReq)
    await task.save()
}
export const deleteTask = async id => await Task.findByIdAndDelete(id)

export const updateTask = async (id,data) => {
    const old =  await Task.findById(id)
    const {title, status} = old
    data.updates = old.updates
    data.updates.unshift({
        title,
        status
    })
    return await Task.findByIdAndUpdate(id, data, {new:true})
}
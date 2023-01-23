import Task from "../models/Task"
// contains the 4 main functions getTask fetches the tasks from 
// the database, saveTask saves the data, deleteTask deletes the 
// tasks and updateTask is that which loads our tasks to the database 
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
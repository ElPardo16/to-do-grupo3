import { getTask, saveTask } from "../../../controller/taskController"
import connection from "../../../db/connection"
import Task from "../../../models/Task"

export default async function handler(req, res) {
  connection()
  switch (req.method) {
    case "GET":
      try {
        const listTask = await getTask()
        return res.status(200).json(listTask)
        
      } catch (error) {
        console.log(error)
        res.status(400).json({
          msg: "error"
        })
      }
      
      break
    case "POST":
      try {
        await saveTask(req.body)
        return res.status(201).json({
          msg: "task saved",
          task: req.body
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({
          msg: "error"
        })
      }
      break
  }

  Task.find()
}

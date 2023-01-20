import { getTask, saveTask } from "../../../controller/taskController"
import connection from "../../../db/connection"

export default async function handler(req, res) {
  connection()
  switch (req.method) {
    case "GET":
      try {
        const listTask = await getTask()
        return res.status(200).json(listTask)
        
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          msg: `Error: ${error.message}`
        })
      }
      
    case "POST":
      try {
        await saveTask(req.body)
        return res.status(201).json({
          msg: "task saved",
          task: req.body
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          msg: `Error: ${error.message}`
        })
      }
  }
}

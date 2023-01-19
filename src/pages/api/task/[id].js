import { deleteTask } from "../../../controller/taskController"
import connection from "../../../db/connection"
import Task from "../../../models/Task"

export default async function  handler(req, res) {
    const { id } = req.query
  connection()
  switch(req.method){
    case "PUT":
      res.status(200).json({
        title: id
      })
      break
    case "DELETE":
      try {
         const { id } = req.query 
         const deleted = await deleteTask(id)
         return res.status(200).json({
            msg:"Tarea Borrada",
            deleted 
         })
      } catch (error) {
         console.log(error)
         return res.status(400).json({
            msg:"error"
         })
         
      }
      break
  }

  Task.find()
}
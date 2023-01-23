import { deleteTask, updateTask } from "../../../controller/taskController"
import connection from "../../../db/connection"

// Only the object containing the id property obtained from the URL can be updated or deleted. 

export default async function  handler(req, res) {
    const { id } = req.query
  connection()
  switch(req.method){
    case "PUT":
      try {
        const update = await updateTask(id, req.body)
        return res.status(200).json({
          msg:'Tarea Actualizada',
          update
        })
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        })
      }
    case "DELETE":
      try {
          const deleted = await deleteTask(id)
          return res.status(200).json({
            msg:"Tarea Borrada",
            deleted 
         })
      } catch (error) {
         console.log(error)
         return res.status(400).json({
            msg: `Error: ${error.message}`
         })
         
      }
  }
}
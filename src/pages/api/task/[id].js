import connection from "../../../db/connection"
import Task from "../../../models/Task"

export default function handler(req, res) {
    const { id } = req.query
  connection()
  switch(req.method){
    case "PUT":
      res.status(200).json({
        title: id
      })
      break
    case "DELETE":
      break
  }

  Task.find()
}
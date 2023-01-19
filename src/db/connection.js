import { connect } from "mongoose"

export default function connection(){
    connect(process.env.URL_DB)
    .then(_ => void console.log("Db connect"))
    .catch(err => void console.log(err))
}
import { connect } from "mongoose"

// this method connects us to the database and is a promise, 
// if the promise is fulfilled it brings the database, otherwise 
// it prints the error in the server console this method 
// connects us to the database and is a promise, if the 
// promise is fulfilled it brings the database, otherwise 
// it prints the error in the server console 

export default function connection(){
    connect(process.env.URL_DB)
    .then(_ => void console.log("Db connect"))
    .catch(err => void console.log(err))
}
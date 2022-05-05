import mongoose from "mongoose";
require('dotenv').config();
const db = mongoose;


db.Promise = global.Promise;


async function connection(url_db:any){
    await db.connect(url_db, (e)=>{
        if(e){
          console.log("DB Error: ", e)
        }
        else{
          console.log("[DB CONNECTED!]");
        }
      });
}
export default connection
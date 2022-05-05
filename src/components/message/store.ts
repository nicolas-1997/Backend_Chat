import { Message } from "../../shared/message.model";
import db from '../../db'
import model from "./model";


const URL_DB = process.env.MONGO_URI;

db(URL_DB)



// let messageList: Message[] = [];

const addMessage = (message: Message): void => {
  console.log(message);
  console.log("Addmessage");
  const myMessege = new model(message);
  myMessege.save();
};

async function getMessageList(filterUser:string){
  console.log(filterUser)
  let filter = {}
  if(filterUser != null){
    filter = {user: filterUser}
  }
  const messages:Message[] = await model.find(filter)
  return messages
} 

async function updateMessage(id:string, message:string){
    const foundMessage = await model.findById({
      _id:id
    })
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage
} 

function removeMessage(id:string) {
    return model.deleteOne({
      _id:id
    })
}

export default {
  add: addMessage,
  list: getMessageList,
  update:updateMessage,
  delete: removeMessage
};

import { Message } from "../../shared/message.model";

import store from "./store"

const addMessage = (user: string, message: string): Promise<Message> => {
  console.log("Estoy en el addMessage")
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject("Incorrect Data");
      console.log("[messageController] => The user or message is incorrect! ");
      return false;
    }

    const fullMessage: Message = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    console.log(fullMessage);
  });
};

const getMessages = (filterUser:string | any):Promise<Message[]> =>{
    return new Promise( (resolve, reject) =>{
        resolve(store.list(filterUser));
    } );
  } 

function updateMessage(id:string, message:string){
  return new Promise(async (resolve, reject) =>{
    if(!id || !message){
      reject("[Invalid Data] => The message or the id is not valid" )
      return false
    }
    const result = store.update(id, message)
    resolve(result)
  })
}

function deleteMessage(id:string){
  return new Promise((resolve, reject) =>{
    if(!id){
      reject("Invalid Id!")
      return false
    }
    store.delete(id)
    .then(()=>{
      resolve(id);
    }).catch(e => {
      reject(e)
    })
  })
}

export default{
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}

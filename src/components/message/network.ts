import express, {Request, Response, Router} from "express"

import response from '../../networks/response'
import { Message } from "../../shared/message.model"
import controller from './controller'


const router:Router = express.Router()
  
router.get('/', async function(req:Request, resp:Response): Promise<void>  {
    const filterMessage = req.query.user || null;

    try {
        const messageList:Message[] = await controller.getMessages(filterMessage);
        response.successMessageList(req, resp, 200, messageList)

    } catch (error) {
        response.error(req, resp,'Unexpected Error', 500, error);
    };
})

router.post('/', async function(req:Request, resp:Response){
    const {user, message} = req.body;
    try{
        console.log("Hola entre por aqui")
        const fullMessage:Message = await controller.addMessage(user, message);
        response.successMessage(req,resp,201,fullMessage)
        resp.send("POST OK!")   
    }catch(error){
        response.error(req, resp, 'Invalid Data', 400, "Controller Error")
    }
})

router.patch('/:id', async function(req:Request, resp:Response){
    controller.updateMessage(req.params.id, req.body.message).then((data)=>{
        response.successMessage(req, resp, 200, data);

    }).catch((e)=>{
        response.error(req, resp, "Error Interno", 500 ,e)
    })
} )


router.delete('/:id', async function(req:Request, resp:Response) {
    controller.deleteMessage(req.params.id).then(() =>{
        response.success(req, resp,`El mensaje con Id: ${req.params.id} fue eliminado`, 200)
    }).catch((e)=>{
        response.error(req, resp, "Error Interno", 500 ,e)
    })
})

module.exports = router;
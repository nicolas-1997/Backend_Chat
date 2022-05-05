import { Request, Response } from "express";
import { Message } from "../shared/message.model";

const success = (req: Request, resp: Response, msg: string, status: number) => {
  resp.status(status || 200).send({
    error: "",
    body: msg,
  });
};

const error = function (
  req: Request,
  resp: Response,
  msg: string,
  status: number,
  details: string | unknown
) {
  console.log("[response error] " + details);
  
  resp.status(status || 500).send({
    error: msg,
    body: "",
  });
};

const successMessage = (
    req: Request,
    res: Response,
    status: number,
    message: Message | unknown
  ): void => {
    res.status(status).send({
      error: "",
      body: message,
    });
  };
  const successMessageList = (
    req: Request,
    res: Response,
    status: number,
    messageList: Message[]
  ): void => {
    res.status(status).send({
      error: "",
      body: messageList,
    });
  };
  export default {
    success,
    successMessage,
    successMessageList,
    error,
  };
  
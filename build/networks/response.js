"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success = (req, resp, msg, status) => {
    resp.status(status || 200).send({
        error: "",
        body: msg,
    });
};
const error = function (req, resp, msg, status, details) {
    console.log("[response error] " + details);
    resp.status(status || 500).send({
        error: msg,
        body: "",
    });
};
const successMessage = (req, res, status, message) => {
    res.status(status).send({
        error: "",
        body: message,
    });
};
const successMessageList = (req, res, status, messageList) => {
    res.status(status).send({
        error: "",
        body: messageList,
    });
};
exports.default = {
    success,
    successMessage,
    successMessageList,
    error,
};

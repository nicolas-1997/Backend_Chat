"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./store"));
const addMessage = (user, message) => {
    console.log("Estoy en el addMessage");
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject("Incorrect Data");
            console.log("[messageController] => The user or message is incorrect! ");
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        store_1.default.add(fullMessage);
        console.log(fullMessage);
    });
};
const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store_1.default.list(filterUser));
    });
};
function updateMessage(id, message) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        if (!id || !message) {
            reject("[Invalid Data] => The message or the id is not valid");
            return false;
        }
        const result = store_1.default.update(id, message);
        resolve(result);
    }));
}
function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Invalid Id!");
            return false;
        }
        store_1.default.delete(id)
            .then(() => {
            resolve(id);
        }).catch(e => {
            reject(e);
        });
    });
}
exports.default = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};

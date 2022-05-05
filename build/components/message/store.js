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
const db_1 = __importDefault(require("../../db"));
const model_1 = __importDefault(require("./model"));
const URL_DB = process.env.MONGO_URI;
(0, db_1.default)(URL_DB);
// let messageList: Message[] = [];
const addMessage = (message) => {
    console.log(message);
    console.log("Addmessage");
    const myMessege = new model_1.default(message);
    myMessege.save();
};
function getMessageList(filterUser) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(filterUser);
        let filter = {};
        if (filterUser != null) {
            filter = { user: filterUser };
        }
        const messages = yield model_1.default.find(filter);
        return messages;
    });
}
function updateMessage(id, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const foundMessage = yield model_1.default.findById({
            _id: id
        });
        foundMessage.message = message;
        const newMessage = yield foundMessage.save();
        return newMessage;
    });
}
function removeMessage(id) {
    return model_1.default.deleteOne({
        _id: id
    });
}
exports.default = {
    add: addMessage,
    list: getMessageList,
    update: updateMessage,
    delete: removeMessage
};

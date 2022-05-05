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
const express_1 = __importDefault(require("express"));
const response_1 = __importDefault(require("../../networks/response"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
router.get('/', function (req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        const filterMessage = req.query.user || null;
        try {
            const messageList = yield controller_1.default.getMessages(filterMessage);
            response_1.default.successMessageList(req, resp, 200, messageList);
        }
        catch (error) {
            response_1.default.error(req, resp, 'Unexpected Error', 500, error);
        }
        ;
    });
});
router.post('/', function (req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user, message } = req.body;
        try {
            console.log("Hola entre por aqui");
            const fullMessage = yield controller_1.default.addMessage(user, message);
            response_1.default.successMessage(req, resp, 201, fullMessage);
            resp.send("POST OK!");
        }
        catch (error) {
            response_1.default.error(req, resp, 'Invalid Data', 400, "Controller Error");
        }
    });
});
router.patch('/:id', function (req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        controller_1.default.updateMessage(req.params.id, req.body.message).then((data) => {
            response_1.default.successMessage(req, resp, 200, data);
        }).catch((e) => {
            response_1.default.error(req, resp, "Error Interno", 500, e);
        });
    });
});
router.delete('/:id', function (req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        controller_1.default.deleteMessage(req.params.id).then(() => {
            response_1.default.success(req, resp, `El mensaje con Id: ${req.params.id} fue eliminado`, 200);
        }).catch((e) => {
            response_1.default.error(req, resp, "Error Interno", 500, e);
        });
    });
});
module.exports = router;

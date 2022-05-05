"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = require('../components/message/network');
const routes = (server) => {
    server.use('/message', message);
};
exports.default = routes;

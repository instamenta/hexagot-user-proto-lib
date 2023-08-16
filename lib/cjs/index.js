"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_pb_1 = __importDefault(require("./protos/generated/types/users_pb"));
const users_grpc_pb_1 = __importDefault(require("./protos/generated/types/users_grpc_pb"));
module.exports = {
    messages: require('./protos/generated/users_pb'),
    service: require('./protos/generated/users_grpc_pb'),
    messages_type: users_pb_1.default,
    service_type: users_grpc_pb_1.default,
};
const GRPC_METHODS = {
    messages: require('./protos/generated/users_pb'),
    service: require('./protos/generated/users_grpc_pb'),
    messages_type: users_pb_1.default,
    service_type: users_grpc_pb_1.default,
};
exports.default = GRPC_METHODS;

import messages_types from './protos/generated/types/users_pb';
import service_types from './protos/generated/types/users_grpc_pb';
module.exports = {
    messages: require('./protos/generated/users_pb'),
    service: require('./protos/generated/users_grpc_pb'),
    messages_type: messages_types,
    service_type: service_types,
};
const GRPC_METHODS = {
    messages: require('./protos/generated/users_pb'),
    service: require('./protos/generated/users_grpc_pb'),
    messages_type: messages_types,
    service_type: service_types,
};
export default GRPC_METHODS;

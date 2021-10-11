"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
function capitalize(str) {
    var loggerOptions = {
        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
        transports: [new winston_1.default.transports.Console()]
    };
    var logger = winston_1.default.createLogger(loggerOptions);
    var regexp = /\b[a-z]/g;
    logger.info('Your string capitalized');
    return str.replace(regexp, function (str) { return str.toUpperCase(); });
}
module.exports = capitalize;
//# sourceMappingURL=index.js.map
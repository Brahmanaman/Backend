import pino from "pino"
import constant from "../constant/app.constant.js"

const logger = pino({
    // 1. Set the minimum log level to record
    level: constant.LOGGER_LEVEL,

    // 2. Customize standard property keys to match your log pipeline
    messageKey: 'message', // Defaults to 'msg'
    errorKey: 'error',     // Defaults to 'err'

    // 3. Setup environment-based transport formatting
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'SYS:standard',
        }
    },

    // 4. Redact sensitive user data automatically
    redact: {
        paths: ['req.headers.authorization', 'password', 'card.number'],
        censor: '[REDACTED]'
    }
});

export default logger
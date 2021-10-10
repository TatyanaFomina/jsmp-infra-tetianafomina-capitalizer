import winston, { Logger, LoggerOptions } from 'winston';

function capitalize(str: string): string {
    const loggerOptions: LoggerOptions = {      
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        transports: [new winston.transports.Console()]
    };
    const logger: Logger = winston.createLogger(loggerOptions);
    const regexp = /\b[a-z]/g;
    
    logger.info('Your string capitalized');
    return str.replace(regexp, (str) => str.toUpperCase());
}

export default capitalize;
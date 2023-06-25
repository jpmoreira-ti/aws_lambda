import { log } from './log.mjs'

export const handler = async(event) => {
    log('Event :' + JSON.stringify(event));
    
    return {
        statusCode: 200,
        body: `<html><body>Dados da Requisicao Atual: ${JSON.stringify(event)}</body></html>`,
        headers:  {
            "content-type": "text/html"
        }
    };
};
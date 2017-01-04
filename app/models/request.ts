export class Request {
    method: string
    schema: string
    host: string
    port: string
    endpoint: string
    body: string
    constructor(method: string = "GET",
                schema: string = 'http',
                host: string = '127.0.0.1',
                port: string = '80',
                endpoint: string = '/',
                body: string = ''
                ) {
        this.schema = schema
        this.host = host
        this.port = port
        this.endpoint = endpoint
        this.body = body
    }
}
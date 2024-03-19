import Fastify = require("fastify");
import { Config } from "./config";

const fastify = Fastify({
    logger: Config.LOGGER_ENABLED
});

export function GET(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const callback = descriptor.value;
        fastify.get(path, callback);
    };    
}

export function POST(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const callback = descriptor.value;
        fastify.post(path, callback);
    };
}

export function PATCH(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const callback = descriptor.value;
        fastify.patch(path, callback);
    };
}

export function PUT(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const callback = descriptor.value;
        fastify.put(path, callback);
    };
}


export function DELETE(path: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const callback = descriptor.value;
        fastify.delete(path, callback);
    };
}

export class Server {
    static async start(modules: any[]): Promise<void> {
        try {
            modules.forEach(module => module());
            await fastify.listen({port: Config.REST_PORT});
            return Promise.resolve();
        } catch (err) {
            fastify.log.error(err);
            return Promise.reject();
        }    
    }
}
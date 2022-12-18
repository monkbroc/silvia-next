declare module 'particle-api-js' {
    declare class Particle {
        constructor();
        login({ username: string, password: string }): Promise<LoginResponse>;
        getVariable({ deviceId: string, name: string, auth: string }): Promise<VariableResponse>;
        getEventStream({ deviceId: string, name: string, auth: string }): Promise<EventStream>;
    }

    type LoginResponse = {
        body: {
            access_token: string;
        }
    };

    type VariableResponse = {
        body: {
            result: string;
        }
    }

    export interface EventStream {
        on(eventName: string, callback: ({ name: string, data: string }) => void);
        abort();
    }

    export = Particle;
}
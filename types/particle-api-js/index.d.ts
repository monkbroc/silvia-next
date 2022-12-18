declare module 'particle-api-js' {
    declare class Particle {
        constructor();
        login({ username: string, password: string }): Promise<LoginResponse>;
        getVariable({ deviceId: string, name: string, auth: string }): Promise<VariableResponse>;
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

    export = Particle;
}
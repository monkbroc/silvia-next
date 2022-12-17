declare module 'particle-api-js' {
    declare class Particle {
        constructor();
        login({ username: string, password: string }): Promise<LoginResponse>
    }

    type LoginResponse {
        body: {
            access_token: string
        }
    };

    export = Particle;
}
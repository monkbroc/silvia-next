export interface DeviceVariables {
    temp: number;
    dc: number;
    e: number;
    s: number,
    i: number,
    p: number;
}
export interface AppVariables {
    temperature: number;
    power: number;
    error: number;
    sleeping: boolean;
    iPart: number,
    pPart: number;
}

export interface DeviceCalibrations {
    sp: number;
    Kp: number;
    Ki: number;
    Ko: number;
}

export interface AppCalibrations {
    targetTemperature?: number;
    proportional?: number;
    integral?: number;
    offset?: number;
}

export const variablesToApp = (data: DeviceVariables): AppVariables => {
    return {
        temperature: data.temp,
        power: data.dc,
        error: data.e,
        sleeping: data.s === 1,
        iPart: data.i,
        pPart: data.p
    };
};

export const calibrationsToApp = (data: DeviceCalibrations): AppCalibrations => {
    return {
        targetTemperature: data.sp,
        proportional: data.Kp,
        integral: data.Ki,
        offset: data.Ko
    };
};

export const calibrationFirmwareName = (name: string) => {
    return {
        targetTemperature: "sp",
        proportional: "Kp",
        integral: "Ki",
        offset: "Ko",
        wakeupTime: "Twakeup",
        sleeping: "sleep"
    }[name];
};

export const calibrationFirmwareValue = (name: string, value: number | boolean) => {
    if (name === "sleeping") {
        return value ? 1 : 0;
    }
    return value;
};

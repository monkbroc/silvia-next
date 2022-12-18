import { useState } from "react";
import CalValue from "./CalValue";

export default function SleepTimer() {
    const loading = false; // TODO
    const [wakeupTime, setWakeupTime] = useState(0);
    const handleSleep = () => {
        // TODO
    };
    const handleTime = (value: string) => {
        // TODO
        setWakeupTime(parseFloat(value || '0'));
    };
    const handleWake = () => {

    };

    return (
        <article>
            <section className="calibratable">
                <h1>Sleep Timer</h1>

                <h2><button className="btn btn-warning btn-lg" disabled={loading}
                    onClick={handleSleep}>Sleep</button>
                    {" until "}
                    <CalValue value={wakeupTime.toString()} disabled={loading}
                        onChange={handleTime} />
                </h2>

                <h2><button className="btn btn-success btn-lg" disabled={loading}
                    onClick={handleWake}>Wake up!</button></h2>
            </section>
        </article>
    );
}
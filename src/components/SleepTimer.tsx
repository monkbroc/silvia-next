export default function SleepTimer() {
    const loading = false; // TODO
    const wakeupTime = 0; // TODO
    const handleSleep = () => {
        // TODO
    };
    const handleTime = () => {
        // TODO
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
                    <td><CalValue value={wakeupTime} disabled={loading}
                        onChange={handleTime} /></td>
                </h2>

                <h2><button className="btn btn-success btn-lg" disabled={loading}
                    onClick={handleWake}>Wake up!</button></h2>
            </section>
        </article>
    );
}
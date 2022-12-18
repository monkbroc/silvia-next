import { useAppSelector } from '../hooks/app';
import { roundPrec } from '../round';
import CalValue from './CalValue';

export default function CalibrateTable() {
    const { power, temperature, error, iPart } = useAppSelector((state) => state.device.variables.values);
    const { targetTemperature, offset, proportional, integral } = useAppSelector((state) => state.device.calibration.values);
    const loaded = useAppSelector((state) => state.device.calibration.status) === 'succeeded';

    const loading = false;
    const iPartOld = loaded ? iPart - integral * error : "–";

    const handleChange = (field: string, value: string) => {
        // TODO
    };

    return (
        <article>
            <section className="calibratable">
                <h1>Calibrate</h1>

                <table className="calibration-table table table-striped">
                    <thead>
                        <tr>
                            <th>Error</th>
                            <th>=</th>
                            <th>Desired Temperature</th>
                            <th>-</th>
                            <th>Measured Temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{roundPrec(error, 1)}</td>
                            <td>=</td>
                            <td><CalValue value={roundPrec(targetTemperature, 1).toString()} disabled={loading}
                                onChange={handleChange.bind(null, 'targetTemperature')} /></td>
                            <td>-</td>
                            <td>{roundPrec(temperature, 1)}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="calibration-table table table-striped">
                    <thead>
                        <tr>
                            <th>Output</th>
                            <th>=</th>
                            <th>Offset</th>
                            <th>+</th>
                            <th>Proportional</th>
                            <th>&times;</th>
                            <th>Error</th>
                            <th>+</th>
                            <th>&Sigma; Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{roundPrec(power, 1)}</td>
                            <td>=</td>
                            <td><CalValue value={roundPrec(offset, 1).toString()} disabled={loading}
                                onChange={handleChange.bind(null, "offset")} /></td>
                            <td>+</td>
                            <td><CalValue value={roundPrec(proportional, 1).toString()} disabled={loading}
                                onChange={handleChange.bind(null, "proportional")} /></td>
                            <td>&times;</td>
                            <td>{roundPrec(error, 1)}</td>
                            <td>+</td>
                            <td>{roundPrec(iPart, 1)}</td>
                        </tr>
                    </tbody>
                </table>

                <table className="calibration-table table table-striped">
                    <thead>
                        <tr>
                            <th>&Sigma; Error</th>
                            <th>=</th>
                            <th>&Sigma; Error<sub>old</sub></th>
                            <th>+</th>
                            <th>Integral</th>
                            <th>&times;</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{roundPrec(iPart, 1)}</td>
                            <td>=</td>
                            <td>{roundPrec(iPartOld, 1)}</td>
                            <td>+</td>
                            <td><CalValue value={roundPrec(integral, 3).toString()} disabled={loading}
                                onChange={handleChange.bind(null, "integral")} /></td>
                            <td>&times;</td>
                            <td>{roundPrec(error, 1)}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    );
}

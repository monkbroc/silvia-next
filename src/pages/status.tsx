import Link from 'next/link';
import AppContainer from '../components/AppContainer';
import TemperatureGauge from '../components/TemperatureGauge';

export default function Status() {
    return (
        <AppContainer>
            <h1>Status Page</h1>
            <Link href="/status">Status</Link>
            <Link href="/calibrate">Calibrate</Link>
            <Link href="/sleep">Sleep</Link>
            <TemperatureGauge power={10} temperature={90} sleeping={true}/>
        </AppContainer>
    );
}

import Link from 'next/link';
import AppContainer from '../components/AppContainer';
import Navbar from '../components/Navbar';
import TemperatureGauge from '../components/TemperatureGauge';

export default function Status() {
    return (
        <AppContainer>
            <Navbar/>
            <TemperatureGauge power={10} temperature={90} sleeping={true}/>
        </AppContainer>
    );
}

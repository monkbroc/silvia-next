import Link from 'next/link';
import AppContainer from '../components/AppContainer';
import Navbar from '../components/Navbar';
import TemperatureGauge from '../components/TemperatureGauge';
import { useEnsureLoggedIn } from '../hooks/login';

export default function Status() {
    // useEnsureLoggedIn();

    return (
        <AppContainer>
            <Navbar/>
            <TemperatureGauge power={10} temperature={90} sleeping={true}/>
        </AppContainer>
    );
}

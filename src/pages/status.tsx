import Link from 'next/link';
import { useRouter } from 'next/router';
import AppContainer from '../components/AppContainer';
import CalibrateTable from '../components/CalibrateTable';
import Navbar from '../components/Navbar';
import SleepTimer from '../components/SleepTimer';
import TemperatureGauge from '../components/TemperatureGauge';
import { useEnsureLoggedIn } from '../hooks/login';

function activeTab() {
    const { query, replace } = useRouter();
    switch (query.tab) {
        case 'status': return 'status';
        case 'calibrate': return 'calibrate';
        case 'sleep': return 'sleep';
        default: return 'status';
    }
}

export default function Status() {
    // useEnsureLoggedIn();

    const tab = activeTab();

    return (
        <AppContainer>
            <Navbar/>
            <TemperatureGauge power={10} temperature={90} sleeping={true}/>
            {tab === 'sleep' && <SleepTimer/>}
            {tab === 'calibrate' && <CalibrateTable/>}
        </AppContainer>
    );
}

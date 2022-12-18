import Link from 'next/link';
import { useRouter } from 'next/router';
import { EventStream } from 'particle-api-js';
import { useEffect } from 'react';
import AppContainer from '../components/AppContainer';
import CalibrateTable from '../components/CalibrateTable';
import Navbar from '../components/Navbar';
import SleepTimer from '../components/SleepTimer';
import TemperatureGauge from '../components/TemperatureGauge';
import { useAppDispatch } from '../hooks/app';
import { useEnsureLoggedIn } from '../hooks/login';
import { subscribeToDeviceData } from '../slices/device';

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
    const dispatch = useAppDispatch();

    useEffect(() => {
        let stream: EventStream;
        let abort = false;
        dispatch(subscribeToDeviceData())
            .then((_stream) => {
                stream = _stream;
                if (abort) {
                    stream.abort();
                }
            }, () => {
                console.error('subscribe failed');
            });
        return () => {
            if (stream) {
                stream.abort();
            } else {
                abort = true;
            }
        }
    }, []);

    const tab = activeTab();

    return (
        <AppContainer>
            <Navbar/>
            <Link href="/blank">Blank page</Link>
            <TemperatureGauge power={10} temperature={90} sleeping={true}/>
            {tab === 'sleep' && <SleepTimer/>}
            {tab === 'calibrate' && <CalibrateTable/>}
        </AppContainer>
    );
}

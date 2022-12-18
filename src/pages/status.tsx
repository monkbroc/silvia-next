import Link from 'next/link';
import { useRouter } from 'next/router';
import { EventStream } from 'particle-api-js';
import { useEffect, useState } from 'react';
import AppContainer from '../components/AppContainer';
import CalibrateTable from '../components/CalibrateTable';
import Navbar from '../components/Navbar';
import SleepTimer from '../components/SleepTimer';
import TemperatureGauge from '../components/TemperatureGauge';
import { useAppDispatch, useAppSelector } from '../hooks/app';
import { subscribeToDeviceData } from '../slices/device';

function useActiveTab() {
    const { query } = useRouter();
    switch (query.tab) {
        case 'status': return 'status';
        case 'calibrate': return 'calibrate';
        case 'sleep': return 'sleep';
        default: return 'status';
    }
}

export default function Status() {
    const [connected, setConnected] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        let stream: EventStream;
        let abort = false;
        dispatch(subscribeToDeviceData())
            .then((_stream) => {
                setConnected(true);
                stream = _stream;
                if (abort) {
                    stream.abort();
                }
            }, () => {
                console.error('subscribe failed');
                router.push('/login');
            });
        return () => {
            if (stream) {
                stream.abort();
            } else {
                abort = true;
            }
        }
    }, [dispatch, router]);

    const { power, temperature, sleeping } = useAppSelector((state) => state.device.variables.values);

    const tab = useActiveTab();

    if (!connected) {
        return <></>;
    }

    return (
        <AppContainer>
            <Navbar/>
            <TemperatureGauge power={power} temperature={temperature} sleeping={sleeping}/>
            {tab === 'sleep' && <SleepTimer/>}
            {tab === 'calibrate' && <CalibrateTable/>}
        </AppContainer>
    );
}
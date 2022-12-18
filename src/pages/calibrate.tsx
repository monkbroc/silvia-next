import { useEffect } from 'react';
import Link from 'next/link';
import { useEnsureLoggedIn } from '../hooks/login';

export default function Status() {
    useEnsureLoggedIn();

    return (
        <>
            <h1>Calibrate Page</h1>
            <Link href="/status">Status</Link>
            <Link href="/calibrate">Calibrate</Link>
            <Link href="/sleep">Sleep</Link>
        </>
    );
}

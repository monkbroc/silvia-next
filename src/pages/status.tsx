import Link from 'next/link';

export default function Status() {
    return (
        <>
            <h1>Status Page</h1>
            <Link href="/status">Status</Link>
            <Link href="/calibrate">Calibrate</Link>
            <Link href="/sleep">Sleep</Link>
        </>
    );
}

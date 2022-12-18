import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Login.module.css';
import AppContainer from '../components/AppContainer';
import { performLogin } from '../slices/login';
import { useAppDispatch, useAppSelector } from '../hooks/app';

export default function Login() {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { status, errorMessage } = useAppSelector((state) => state.login);
    const router = useRouter();

    console.log({ status, errorMessage });

    const loading = status === 'loading';
    const hasError = status === 'failed';

    async function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const result = await dispatch(performLogin({ username, password }));
        if (result.type === performLogin.fulfilled.type) {
            router.push('/status');
        }
    }

    const busyIcon = <i className="bi-hourglass"></i>;

    return (
        <AppContainer>
            <div className="header">
              <h3 className="text-muted">silvia</h3>
            </div>
            <section>
            <h2 className="text-center">Log in</h2>
            <form className={styles.loginForm}>
                <input type="email" name="email" className="form-control"
                placeholder="Particle.io email" disabled={loading}
                value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" className="form-control"
                placeholder="Particle.io password" disabled={loading}
                value={password} onChange={(e) => setPassword(e.target.value)} />
                {hasError && <div className="error">{errorMessage}</div>}
                <button className="btn btn-warning w-100" onClick={handleClick} disabled={loading}>
                {loading ? busyIcon : 'Log In'}
                </button>
            </form>
            </section>
        </AppContainer>
    );
}
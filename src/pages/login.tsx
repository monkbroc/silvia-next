import { useState } from 'react';
import styles from '../../styles/Login.module.css';
import AppContainer from '../components/AppContainer';
import { performLogin } from '../slices/login';
import { useAppDispatch } from '../hooks';

export default function Login() {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(e) {
        e.preventDefault(true);
        dispatch(performLogin({ username, password }));
    }

    return (
        <AppContainer>
            <div className="header">
              <h3 className="text-muted">silvia</h3>
            </div>
            <section>
            <h2 className="text-center">Log in</h2>
            <form className={styles.loginForm}>
                <input type="email" name="email" className="form-control"
                placeholder="Particle.io email" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="password" className="form-control"
                placeholder="Particle.io password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-warning w-100" onClick={handleClick}>
                Log In
                </button>
            </form>
            </section>
        </AppContainer>
    );
}
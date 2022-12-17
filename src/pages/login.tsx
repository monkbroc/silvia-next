import styles from '../../styles/Login.module.css';
import AppContainer from '../components/AppContainer';

export default function Login() {
    return (
        <AppContainer>
            <div className="header">
              <h3 className="text-muted">silvia</h3>
            </div>
            <section>
            <h2 className="text-center">Log in</h2>
            <form className={styles.loginForm}>
                <input type="email" name="email" className="form-control"
                placeholder="Particle.io email" />
                <input type="password" name="password" className="form-control"
                placeholder="Particle.io password" />
                <button type="submit" className="btn btn-warning w-100">
                Log In
                </button>
            </form>
            </section>
        </AppContainer>
    );
}
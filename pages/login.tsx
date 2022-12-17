import styles from '../styles/Login.module.css';
import AppContainer from '../components/AppContainer';

export default function Login() {
    return (
        <AppContainer>
            <div className={styles.header}>
              <h3 className={styles.textMuted}>silvia</h3>
            </div>
            <section>
            <h2 className={styles.textCenter}>Log in</h2>
            <form className={styles.loginForm}>
                <input type="email" name="email"
                placeholder="Particle.io email" />
                <input type="password" name="password"
                placeholder="Particle.io password" />
                <button type="submit" className={styles.loginButton}>
                Log In
                </button>
            </form>
            </section>
        </AppContainer>
    );
}
import styles from '../../styles/AppContainer.module.css';

type Props = {
    children: React.ReactNode
};

export default function AppContainer({ children }: Props) {
    return (
        <div className={`container ${styles.container}`}>
            <div className="wrap">
                {children}
            </div>
        </div>
    );
}
import styles from '../../styles/TemperatureGauge.module.css';
import { roundPrec } from '../round';

type Props = {
    sleeping: boolean;
    temperature: number;
    power: number;
};

export default function TemperatureGauge({ sleeping, temperature, power }: Props) {
    const powerRound = Math.round(power || 0);
    const powerLog = power > 1.0 ? 50 * Math.log10(power) : 0;

    const renderTemperature = () => {
        if (sleeping) {
            return (<i className="bi-moon-stars"></i>);
        }

        return roundPrec(temperature, 0);
    };

    return (
        <article>
            <section>
                <h2 className="text-center">Temperature</h2>
                <div className={`${styles["circle"]} ${styles["circle-medium"]} ${styles["circle-border"]}`}>
                    <div className={styles["circle-inner"]}>
                        <div className={styles["score-text"]}>
                            {renderTemperature()}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-sm-3 col-md-3 offset-md-2">
                        <h2>Heater <b>{powerRound}%</b></h2>
                    </div>
                    <div className="col-sm-9 col-md-5">
                        <div className={`progress ${styles["progress-side"]}`}>
                            <div className="progress-bar" style={{ width: powerLog + "%" }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
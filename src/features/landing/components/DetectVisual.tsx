import styles from './DetectVisual.module.css';

const SENSORS = [
  { label: 'Accelerometer', height: '50%', level: '70%' },
  { label: 'Gyroscope', height: '75%', level: '85%' },
];

/** Three rising bars: two sensor readings and the combined verdict. */
export function DetectVisual() {
  return (
    <div className={styles.bars}>
      {SENSORS.map((s) => (
        <div key={s.label} className={styles.bar} style={{ height: s.height }}>
          <span className={styles.label}>{s.label}</span>
          <span className={styles.meter} role="img" aria-label={`${s.label} reading ${s.level}`}>
            <span className={styles.level} style={{ width: s.level }} />
          </span>
        </div>
      ))}
      <div className={`${styles.bar} ${styles.verdict}`}>
        <span className={styles.label}>Speed drop</span>
        <span className={styles.verdictText}>Crash likely</span>
      </div>
    </div>
  );
}

import { LANDING_CONFIG } from '../landing.config';
import { useWelfareCountdown, type WelfarePhase } from '../hooks/useWelfareCountdown';
import styles from './WelfareCheckDemo.module.css';

const RING_LENGTH = 326.7; // 2π × r(52)

const COPY: Record<WelfarePhase, { title: string; button: string }> = {
  count: { title: 'Are you okay?', button: "I'm okay" },
  ok: { title: 'Glad you are okay', button: 'Alert cancelled' },
  help: { title: 'No response. Getting help…', button: 'Contacts alerted' },
};

/** Interactive phone mock-up of the welfare check countdown. */
export function WelfareCheckDemo() {
  const { phase, secondsLeft, fraction, confirmOkay } = useWelfareCountdown({
    totalSeconds: LANDING_CONFIG.countdownSeconds,
    helpHoldSeconds: LANDING_CONFIG.helpHoldSeconds,
    okHoldSeconds: LANDING_CONFIG.okHoldSeconds,
  });
  const copy = COPY[phase];

  return (
    <div className={styles.wrap}>
      <div className={styles.phone} data-phase={phase}>
        <span className={styles.status}>Possible crash detected</span>
        <span className={styles.dial}>
          <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" className={styles.ring}>
            <circle cx="60" cy="60" r="52" className={styles.track} />
            <circle
              cx="60"
              cy="60"
              r="52"
              className={styles.progress}
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={(RING_LENGTH * (1 - fraction)).toFixed(1)}
            />
          </svg>
          <span role="timer" aria-live="polite" className={styles.count}>
            {phase === 'ok' ? 'OK' : secondsLeft}
          </span>
        </span>
        <span className={styles.title}>{copy.title}</span>
        <button type="button" className={styles.button} onClick={confirmOkay} disabled={phase !== 'count'}>
          {copy.button}
        </button>
      </div>
    </div>
  );
}

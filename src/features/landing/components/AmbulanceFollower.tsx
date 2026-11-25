import styles from './AmbulanceFollower.module.css';

type AmbulanceFollowerProps = { x: number; y: number; facing: 1 | -1 };

/** Decorative ambulance that trails the pointer. Hidden from assistive tech. */
export function AmbulanceFollower({ x, y, facing }: AmbulanceFollowerProps) {
  return (
    <div className={styles.follower} aria-hidden="true" style={{ transform: `translate(${x - 48}px, ${y - 64}px)` }}>
      <div className={styles.flip} style={{ transform: `scaleX(${facing})` }}>
        <svg width="96" height="56" viewBox="0 0 96 56" fill="none">
          <rect x="34" y="2" width="14" height="6" rx="2" className={styles.sirenRed} />
          <rect x="50" y="2" width="14" height="6" rx="2" className={styles.sirenBlue} />
          <path d="M4 14h56v30H4z" className={styles.body} />
          <path d="M60 20h16l12 12v12H60z" className={styles.body} />
          <path d="M64 24h10l7 8H64z" className={styles.window} />
          <rect x="4" y="34" width="84" height="5" className={styles.stripe} />
          <path d="M28 18v12M22 24h12" className={styles.cross} />
          <circle cx="20" cy="46" r="7" className={styles.tyre} />
          <circle cx="20" cy="46" r="2.5" className={styles.hub} />
          <circle cx="72" cy="46" r="7" className={styles.tyre} />
          <circle cx="72" cy="46" r="2.5" className={styles.hub} />
        </svg>
      </div>
    </div>
  );
}

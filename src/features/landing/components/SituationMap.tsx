import styles from './SituationMap.module.css';

/** Stylised live map: incident pulse and a responder en route. */
export function SituationMap() {
  return (
    <div className={styles.map}>
      <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M0 170 C 100 150, 160 70, 260 90 S 380 150, 420 60" className={styles.mainRoad} />
        <path d="M60 0 L 120 240" className={styles.sideRoad} />
        <circle cx="260" cy="90" r="30" className={`${styles.incidentHalo} stg-pulse`} />
        <circle cx="260" cy="90" r="8" className={styles.incident} />
        <circle cx="90" cy="110" r="7" className={styles.responder} />
        <path d="M90 110 C 150 110, 200 96, 252 92" className={styles.route} />
      </svg>
      <span className={styles.tag}>Situation Room</span>
    </div>
  );
}

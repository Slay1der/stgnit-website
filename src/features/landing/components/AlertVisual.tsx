import styles from './AlertVisual.module.css';

const ROWS = [
  { who: 'Mum', status: 'Location sent', done: true },
  { who: 'Emergency responder', status: 'Alerted', done: true },
  { who: 'Medical profile', status: 'Blood type · Allergies', done: false },
];

export function AlertVisual() {
  return (
    <ul className={styles.list}>
      {ROWS.map((row) => (
        <li key={row.who} className={styles.row}>
          <span className={styles.who}>{row.who}</span>
          <span className={row.done ? styles.done : styles.detail}>{row.status}</span>
        </li>
      ))}
    </ul>
  );
}

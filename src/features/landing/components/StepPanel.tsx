import type { ReactNode } from 'react';
import styles from './StepPanel.module.css';

type StepPanelProps = {
  number: string;
  title: string;
  description: ReactNode;
  tone?: 'light' | 'dark';
  children: ReactNode;
};

/** One row of the "How it works" sequence: copy on one side, illustration on the other. */
export function StepPanel({ number, title, description, tone = 'light', children }: StepPanelProps) {
  return (
    <li className={`${styles.panel} ${styles[tone]} stg-reveal`}>
      <div className={styles.copy}>
        <span className={styles.number} aria-hidden="true">
          {number}
        </span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.visual}>{children}</div>
    </li>
  );
}

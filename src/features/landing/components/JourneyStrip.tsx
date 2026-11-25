import { Container } from '@/components/ui/Container';
import { JOURNEY_STEPS } from '../data/content';
import styles from './JourneyStrip.module.css';

/** The four-stage summary under the hero. */
export function JourneyStrip() {
  return (
    <div className={styles.strip}>
      <Container as="ol" className={styles.list} aria-label="How Stignit responds">
        {JOURNEY_STEPS.map((step, i) => (
          <li key={step.title} className={styles.item}>
            <span className={styles.number} aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <div className={styles.title}>{step.title}</div>
              <div className={styles.caption}>{step.caption}</div>
            </div>
          </li>
        ))}
      </Container>
    </div>
  );
}

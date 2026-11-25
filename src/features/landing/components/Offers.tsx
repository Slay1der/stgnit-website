import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { OFFERS } from '../data/content';
import styles from './Offers.module.css';

export function Offers() {
  return (
    <Container as="section" id="offer" className={styles.section} aria-labelledby="offer-title">
      <div className={styles.intro}>
        <SectionIntro headingId="offer-title" eyebrow="What we offer" title="Everything you need when it matters most." />
      </div>
      <ul className={styles.grid}>
        {OFFERS.map(({ title, description, Icon }) => (
          <li key={title} className={`${styles.card} stg-card stg-reveal`}>
            <span className={styles.icon}>
              <Icon size={32} />
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
        <li className={`${styles.card} ${styles.partner} stg-card stg-reveal`}>
          <h3 className={styles.partnerTitle}>For organisations</h3>
          <p className={styles.partnerText}>Partner plans for HMOs, fleets, hospitals and agencies.</p>
          <a href="#contact" className={styles.partnerLink}>
            Talk to us →
          </a>
        </li>
      </ul>
    </Container>
  );
}

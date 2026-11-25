import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { ContactDetails } from './ContactDetails';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Container as="section" id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.info}>
        <SectionIntro
          headingId="contact-title"
          size="compact"
          eyebrow="Reach us"
          title="Let's make Nigerian roads safer together."
          description="Partnerships, press or support — send a message and the team will get back to you."
        />
        <ContactDetails />
      </div>
      <ContactForm />
    </Container>
  );
}

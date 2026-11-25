import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { StepPanel } from './StepPanel';
import { DetectVisual } from './DetectVisual';
import { WelfareCheckDemo } from './WelfareCheckDemo';
import { AlertVisual } from './AlertVisual';
import { SituationMap } from './SituationMap';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  return (
    <Container as="section" id="how" className={styles.section} aria-labelledby="how-title">
      <div className={styles.intro}>
        <SectionIntro
          headingId="how-title"
          eyebrow="How it works"
          title="From impact to help, without you lifting a finger."
          description="Stignit runs quietly in the background while you move. If something goes wrong, it takes over."
        />
      </div>

      <ol className={styles.steps}>
        <StepPanel
          number="01"
          title="Detect"
          description="Your phone's accelerometer, gyroscope and speed data are checked together in three stages, so a dropped phone isn't mistaken for a crash."
        >
          <DetectVisual />
        </StepPanel>
        <StepPanel
          number="02"
          title="Check"
          description="A welfare check pops up with a short countdown. Okay? Tap to cancel. No answer means you may need help — so Stignit moves on."
        >
          <WelfareCheckDemo />
        </StepPanel>
        <StepPanel
          number="03"
          title="Alert"
          description="Your emergency contacts and nearby responders get your live location and the medical details you chose to share — blood type, allergies. No GPS lock? It sends your last known spot first and updates as it goes."
        >
          <AlertVisual />
        </StepPanel>
        <StepPanel
          number="04"
          title="Rescue"
          tone="dark"
          description="The Situation Room shows the incident on a live map so everyone responding sees the same picture. Covered by an HMO? Your in-network hospitals are contacted first."
        >
          <SituationMap />
        </StepPanel>
      </ol>
    </Container>
  );
}

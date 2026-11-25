import { LANDING_CONFIG } from '../landing.config';
import { useCursorFollower } from '../hooks/useCursorFollower';
import { AmbulanceFollower } from './AmbulanceFollower';
import { SiteHeader } from './SiteHeader';
import { HowItWorks } from './HowItWorks';
import { Sectors } from './Sectors';
import { Offers } from './Offers';
import { DownloadCta } from './DownloadCta';
import { Contact } from './Contact';
import { SiteFooter } from './SiteFooter';
import styles from './LandingPage.module.css';

export function LandingPage() {
  const follow = LANDING_CONFIG.followCursor;
  const { containerRef, position, handlers } = useCursorFollower<HTMLDivElement>(follow);

  return (
    <div ref={containerRef} className={styles.page} {...handlers}>
      {follow && <AmbulanceFollower x={position.x} y={position.y} facing={position.facing} />}
      <SiteHeader />
      <main>
        <HowItWorks />
        <Sectors />
        <Offers />
        <DownloadCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

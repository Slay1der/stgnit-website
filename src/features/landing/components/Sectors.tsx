import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SECTORS } from '../data/content';
import { SectorItem } from './SectorItem';
import styles from './Sectors.module.css';

export function Sectors() {
  const [openId, setOpenId] = useState<string | null>(SECTORS[0]?.id ?? null);

  return (
    <Container as="section" id="sectors" className={styles.section} aria-labelledby="sectors-title">
      <div className={styles.intro}>
        <SectionIntro
          headingId="sectors-title"
          eyebrow="Who it's for"
          title="One network. Everyone who helps after a crash."
          description="Tap a sector to see how Stignit works for it."
        />
      </div>
      <div className={styles.list}>
        {SECTORS.map((sector) => (
          <SectorItem
            key={sector.id}
            sector={sector}
            open={openId === sector.id}
            onToggle={() => setOpenId((cur) => (cur === sector.id ? null : sector.id))}
          />
        ))}
      </div>
    </Container>
  );
}

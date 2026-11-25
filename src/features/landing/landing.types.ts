import type { ComponentType } from 'react';

export type JourneyStep = { title: string; caption: string };

export type Sector = {
  id: string;
  name: string;
  video: string;
  videoLabel: string;
  description: string;
  highlights: string[];
};

export type Offer = {
  title: string;
  description: string;
  Icon: ComponentType<{ size?: number }>;
};

export type ContactAudience = string;

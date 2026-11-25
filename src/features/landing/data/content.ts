import { BookIcon, ClockIcon, MedicalIcon, PeopleIcon, PinIcon, PulseIcon, TargetIcon } from '@/components/ui/icons';
import driversVideo from '@/assets/videos/sector-drivers.mp4';
import hmosVideo from '@/assets/videos/sector-hmos.mp4';
import hospitalsVideo from '@/assets/videos/sector-hospitals.mp4';
import fleetsVideo from '@/assets/videos/sector-fleets.mp4';
import governmentVideo from '@/assets/videos/sector-government.mp4';
import type { ContactAudience, JourneyStep, Offer, Sector } from '../landing.types';

export const JOURNEY_STEPS: JourneyStep[] = [
  { title: 'Detect', caption: 'Sensors spot the crash' },
  { title: 'Check', caption: '"Are you okay?" countdown' },
  { title: 'Alert', caption: 'Contacts + responders notified' },
  { title: 'Rescue', caption: 'Help coordinated live' },
];

export const SECTORS: Sector[] = [
  {
    id: 'drivers',
    name: 'Drivers, riders & passengers',
    video: driversVideo,
    videoLabel: 'How Stignit works for drivers, riders and passengers',
    description:
      "Install the app, add your emergency contacts and medical info, and switch on monitoring. If you crash on the road, help is called for you — whether you're driving, on an okada, or in a bus.",
    highlights: ['Automatic crash detection', 'One-tap SOS', 'Family sees your live location'],
  },
  {
    id: 'hmos',
    name: 'HMOs & insurers',
    video: hmosVideo,
    videoLabel: 'How Stignit works for HMOs and insurers',
    description:
      'Bundle Stignit into your plans. When a member crashes, your in-network hospitals are contacted first — faster care for them, better-managed costs for you.',
    highlights: ['In-network hospital routing', 'Member medical profile on hand', 'Incident records for claims'],
  },
  {
    id: 'hospitals',
    name: 'Hospitals & emergency responders',
    video: hospitalsVideo,
    videoLabel: 'How Stignit works for hospitals and responders',
    description:
      'Receive verified incidents with exact location and key medical details before you arrive. Coordinate with other responders in the Situation Room.',
    highlights: ['Live incident map', 'Patient info before arrival', 'Verified personnel accounts'],
  },
  {
    id: 'fleets',
    name: 'Fleets, logistics & ride-hailing',
    video: fleetsVideo,
    videoLabel: 'How Stignit works for fleets and logistics',
    description:
      'Protect drivers and riders on every trip. Get notified the moment one of your vehicles is in a crash, with location and response status.',
    highlights: ['Fleet-wide crash alerts', 'Driver welfare checks', 'Incident history per driver'],
  },
  {
    id: 'government',
    name: 'Government & road-safety agencies',
    video: governmentVideo,
    videoLabel: 'How Stignit works for government and road-safety agencies',
    description:
      'See where crashes happen and how fast help arrives. Use real incident data to plan patrols, ambulances and safer roads.',
    highlights: ['Crash hotspot insights', 'Response-time reporting', 'Direct incident dispatch'],
  },
];

export const OFFERS: Offer[] = [
  { title: 'Automatic crash detection', description: 'Three-stage sensor check running quietly in the background.', Icon: PulseIcon },
  { title: 'Welfare check', description: 'A quick "Are you okay?" so false alarms never go out.', Icon: ClockIcon },
  { title: 'One-tap SOS', description: 'Trigger an alert yourself — it never waits on GPS.', Icon: TargetIcon },
  { title: 'Live Situation Room', description: 'One live map for family and responders.', Icon: PinIcon },
  { title: 'Emergency contacts', description: 'The people you trust hear first.', Icon: PeopleIcon },
  { title: 'Medical profile', description: 'Blood type and allergies, shared only in an emergency.', Icon: MedicalIcon },
  { title: 'First-aid library', description: 'Clinically reviewed guides and drills. Coming soon.', Icon: BookIcon },
];

export const CONTACT_AUDIENCES: ContactAudience[] = [
  'An individual user',
  'HMO / insurer',
  'Hospital / responder',
  'Fleet / logistics',
  'Government / agency',
  'Press / other',
];

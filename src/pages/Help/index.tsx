import React from 'react';
import {
  HelpClaims,
  HelpTargets,
  HelpItemSpec,
  HelpContentSpec,
  HelpAccessibility,
  HelpPTOverview,
  HelpTestDevOverview,
  HelpFaq
} from '../../components/HelpContent';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';
import { GenericContentPage } from '../../components/GenericContentPage';

export interface HelpSection {
  title: string;
  jsx: React.ReactNode;
}

export interface HelpPageProps {
  helpSections: HelpSection[];
}

export const helpSections: HelpSection[] = [
  {
    title: 'Claims',
    jsx: <HelpClaims />
  },
  {
    title: 'Targets',
    jsx: <HelpTargets />
  },
  {
    title: 'Item Specifications Overview',
    jsx: <HelpItemSpec />
  },
  {
    title: 'Content Specifications',
    jsx: <HelpContentSpec />
  },
  {
    title: 'Accessibility',
    jsx: <HelpAccessibility />
  },
  {
    title: 'FAQ',
    jsx: <HelpFaq />
  },
  {
    title: 'About Test Development and Design',
    jsx: <HelpTestDevOverview />
  },
  {
    title: 'Performance Task Item Specification',
    jsx: <HelpPTOverview />
  }
];

const HelpPageContent: React.SFC = () => (
  <GenericContentPage contentSections={helpSections} />
);

export const HelpPage = genericLayout(<Title>Help</Title>, HelpPageContent);

import React from 'react';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';
import { ContentSection, GenericContentPage } from '../../components/GenericContentPage';
import {
  DevOverview,
  DevTestBlueprint,
  DevInterimBlueprint,
  DevItemSpecOverview,
  DevAccForItems,
  DevAddtlItemSpec,
  DevFullItemSpec,
  DevContentSpec,
  DevIntroELAContentSpec,
  DevIntroMathContentSpec
} from '../../components/DevPageContent';

const sections: ContentSection[] = [
  {
    title: 'Overview',
    jsx: <DevOverview />
  },
  {
    title: 'Test Blueprints',
    jsx: undefined,
    subsections: [
      {
        title: 'Summative Test Blueprints',
        jsx: <DevTestBlueprint />
      },
      {
        title: 'Interim Assessment Overview and Blueprints',
        jsx: <DevInterimBlueprint />
      }
    ]
  },
  {
    title: 'Item Specifications',
    jsx: undefined,
    subsections: [
      {
        title: 'Overview',
        jsx: <DevItemSpecOverview />
      },
      {
        title: 'Accessibility for Items',
        jsx: <DevAccForItems />
      },
      {
        title: 'Additional Item Specification Resources',
        jsx: <DevAddtlItemSpec />
      },
      {
        title: 'Full Item Specifications',
        jsx: <DevFullItemSpec />
      }
    ]
  },
  {
    title: 'Content Specifications',
    jsx: <DevContentSpec />,
    subsections: [
      {
        title: 'Introduction to ELA Content Specifications',
        jsx: <DevIntroELAContentSpec />
      },
      {
        title: 'Introduction to Math Content Specifications',
        jsx: <DevIntroMathContentSpec />
      }
    ]
  }
];

const DevelopmentPageComponent: React.SFC = () => <GenericContentPage contentSections={sections} />;

export const DevelopmentPage = genericLayout(
  <Title>Learn About Test Development and Design</Title>,
  DevelopmentPageComponent
);

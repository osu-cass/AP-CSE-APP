import React from 'react';
import { SizeBreaks } from '../../constants';
import MediaQuery from 'react-responsive';
import { MobileGenericContentPage } from './mobile';
import { DesktopGenericContentPage } from './desktop';

export interface ContentSection {
  title: string;
  jsx: React.ReactNode;
}

export interface GenericContentProps {
  contentSections: ContentSection[];
}

export const GenericContentPage: React.SFC<GenericContentProps> = ({ contentSections }) => (
  <React.Fragment>
    <MediaQuery minDeviceWidth={SizeBreaks.mobile + 1}>
      <DesktopGenericContentPage contentSections={contentSections} />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={SizeBreaks.mobile}>
      <MobileGenericContentPage contentSections={contentSections} />
    </MediaQuery>
  </React.Fragment>
);

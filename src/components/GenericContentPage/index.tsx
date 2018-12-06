import React from 'react';
import { SizeBreaks } from '../../constants';
import MediaQuery from 'react-responsive';
import { MobileGenericContentPage } from './mobile';
import { DesktopGenericContentPage } from './desktop';

export interface ContentSection {
  title: string;
  jsx: React.ReactNode;
  subsections?: ContentSection[];
}

export interface GenericContentProps {
  contentSections: ContentSection[];
  scrollOffset?: number;
  rightContent?: React.ReactNode;
}

export const GenericContentPage: React.SFC<GenericContentProps> = ({
  contentSections,
  scrollOffset,
  rightContent
}) => (
  <React.Fragment>
    <MediaQuery minDeviceWidth={SizeBreaks.mobile + 1}>
      <DesktopGenericContentPage
        contentSections={contentSections}
        scrollOffset={scrollOffset}
        rightContent={rightContent}
      />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={SizeBreaks.mobile}>
      <MobileGenericContentPage contentSections={contentSections} />
      {rightContent}
    </MediaQuery>
  </React.Fragment>
);

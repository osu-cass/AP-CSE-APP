import React from 'react';

import { GenericPage } from '../../components/GenericPage';
import { AppLink, AppLinkProps } from '../../components/AppLink';

/*tslint:disable: no-require-imports no-var-requires */
const image: string = require('../../assets/images/smarter-balanced.png') as string;
const sampleItemsImg: string = require('../../assets/images/sample-items.png') as string;
const digitalLibraryImg: string = require('../../assets/images/digital-library.png') as string;

const scoreGuidesLinkProps: AppLinkProps = {
  title: 'Score Guides',
  imgUrl: image,
  desc: 'Score Guides explanation...',
  linkBtnProps: {
    text: 'Visit Score Guides Page',
    url: ''
  }
};
const digitalLibraryLinkProps: AppLinkProps = {
  title: 'Digital Library',
  imgUrl: digitalLibraryImg,
  desc:
    'The Digital Library contains classroom activities, lessons, and professional development resources to help you enhance instruction and support learning.',
  linkBtnProps: {
    text: 'Visit Digital Library',
    url: 'https://sbdigitallibrary.org/'
  }
};
const practiceTestsLinkProps: AppLinkProps = {
  title: 'Practice Tests',
  imgUrl: image,
  desc: 'Practice Tests explanation...',
  linkBtnProps: {
    text: 'Visit Practice Tests Page',
    url: ''
  }
};
const sampleItemsLinkProps: AppLinkProps = {
  title: 'Sample Items',
  imgUrl: sampleItemsImg,
  desc:
    'This site provides examples of test questions used on Smarter Balanced assessments in English language arts / literacy and math. Teachers, parents, students, administrators, and policymakers can experience these test items just as students encounter them.',
  linkBtnProps: {
    text: 'Visit Sample Items Website',
    url: 'http://sampleitems.smarterbalanced.org/'
  }
};

const renderAppLink = (appLinkProps: AppLinkProps): JSX.Element => {
  return (
    <AppLink
      title={appLinkProps.title}
      imgUrl={appLinkProps.imgUrl}
      desc={appLinkProps.desc}
      linkBtnProps={appLinkProps.linkBtnProps}
    />
  );
};

export const AppsPage = () => (
  <GenericPage title="My Applications">
    <div className="content">
      <div className="apps">
        {renderAppLink(scoreGuidesLinkProps)}
        {renderAppLink(digitalLibraryLinkProps)}
        {renderAppLink(practiceTestsLinkProps)}
        {renderAppLink(sampleItemsLinkProps)}
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .apps {
        width: 960px;
        height: 620px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </GenericPage>
);

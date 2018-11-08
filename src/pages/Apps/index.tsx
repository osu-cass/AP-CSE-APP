import React, { Component } from 'react';

import { TitleBar } from '../../components/TitleBar';
import { AppLink, AppLinkProps } from '../../components/AppLink';
import { blueGradient } from '../../constants';

/*tslint:disable: no-require-imports no-var-requires */
const image: string = require('../../assets/images/smarter-balanced.png') as string;

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
  imgUrl: image,
  desc: 'Digital Library explanation...',
  linkBtnProps: {
    text: 'Visit Digital Library',
    url: ''
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
  imgUrl: image,
  desc: 'Sample Items explanation...',
  linkBtnProps: {
    text: 'Visit Sample Items Website',
    url: ''
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
  <>
    <div className="content">
      <div className="title">
        <TitleBar claimTitle="My Applications" />
      </div>
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
        // justify-content: center;
        align-items: center;
        // max-height: calc(100vh - 64px);
      }
      .title {
        background-image: ${blueGradient};
        width: 100%;
      }
      .apps {
        width: 960px;
        height: 620px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </>
);

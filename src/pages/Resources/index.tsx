import React from 'react';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { ResourceLinkProps, ResourceLink } from '../../components/ResourceLink';
import { Title } from '../../components/GenericPage/Title';

/*tslint:disable: no-require-imports no-var-requires */
const educatorimg: string = require('../../assets/images/educator-page.png') as string;
const linkProps: ResourceLinkProps = {
  title: 'Resources for Educators',
  imgUrl: educatorimg,
  subHeading:
    'To learn more about the resources developed by Smarter Balanced for Educators, which include:',
  desc: [
    'Interim Assessments',
    'The Digital Library',
    'Sample Test Items',
    'Practice and Training Tests',
    'Scoring Guides and Annotated Anchors',
    'And more'
  ],
  linkBtnProps: {
    text: 'Visit Educators Page',
    url: 'http://www.smarterbalanced.org/educators'
  }
};
const ResourcesPageComponent: React.SFC = () => (
  <React.Fragment>
    <div className="content">
      <div className="resource">
        <div className="links">
          <ResourceLink
            title={linkProps.title}
            imgUrl={linkProps.imgUrl}
            linkBtnProps={linkProps.linkBtnProps}
            subHeading={linkProps.subHeading}
            desc={linkProps.desc}
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .resource {
        height: 620px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </React.Fragment>
);

export const ResourcesPage = genericLayout(<Title>My Resources</Title>, ResourcesPageComponent);

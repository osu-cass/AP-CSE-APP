import React from 'react';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { ResourceLinkProps, ResourceLink } from '../../components/ResourceLink';
import { Title } from '../../components/GenericPage/Title';
import { MobileBreakSize } from '../../components/MediaQuery/MediaQueryWrapper';

/*tslint:disable: no-require-imports no-var-requires */
const scoreimg: string = require('../../assets/images/score-guide.png') as string;
const Practiceimg: string = require('../../assets/images/practice-tests.png') as string;
const sampleItemsImg: string = require('../../assets/images/sample-items.png') as string;
const digitalLibraryImg: string = require('../../assets/images/digital-library.png') as string;

const linkProps: ResourceLinkProps[] = [
  {
    title: 'Score Guides',
    imgUrl: scoreimg,
    desc: 'Practice Test Scoring Guides for grades 3-12 in Math and English Language Arts.',
    linkBtnProps: {
      text: 'Visit Score Guides Page',
      url:
        'http://www.smarterbalanced.org/assessments/practice-and-training-tests/resources-and-documentation/#tab-3'
    }
  },
  {
    title: 'Digital Library',
    imgUrl: digitalLibraryImg,
    desc:
      'The Digital Library contains classroom activities, lessons, and professional development resources to help you enhance instruction and support learning.',
    linkBtnProps: {
      text: 'Visit Digital Library',
      url: 'https://sbdigitallibrary.org/'
    }
  },
  {
    title: 'Practice Tests',
    imgUrl: Practiceimg,
    desc:
      'Use the same testing software as students to see what they encounter during testing! Try out an English language arts or math test to learn how the test works, what’s expected of students and what kind of questions are included on them.',
    linkBtnProps: {
      text: 'Visit Practice Tests Page',
      url: 'http://www.smarterbalanced.org/assessments/samples/'
    }
  },
  {
    title: 'Sample Items',
    imgUrl: sampleItemsImg,
    desc:
      'This site provides examples of test questions used on Smarter Balanced assessments in English language arts / literacy and math. Teachers, parents, students, administrators, and policymakers can experience these test items just as students encounter them.',
    linkBtnProps: {
      text: 'Visit Sample Items Website',
      url: 'http://sampleitems.smarterbalanced.org/'
    }
  }
];

const ResourcesPageComponent: React.SFC = () => (
  <React.Fragment>
    <div className="content">
      <div className="resource">
        {linkProps.map((props: ResourceLinkProps, idx: number) => (
          <ResourceLink key={idx} {...props} />
        ))}
        <div className="resource-page-mobile-padding" />
      </div>
    </div>
    <style jsx>{`
      @media (max-width: ${MobileBreakSize.maxWidth}px) {
        .resource-page-mobile-padding {
          height: 200px;
          width: 100px;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .resource {
        height: 620px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </React.Fragment>
);

export const ResourcesPage = genericLayout(<Title>My Resources</Title>, ResourcesPageComponent);

import React from 'react';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { AppLinkProps, AppLink } from '../../components/AppLink';
import { Title } from '../../components/GenericPage/Title';

/*tslint:disable: no-require-imports no-var-requires */
const scoreimg: string = require('../../assets/images/score-guide.png') as string;
const Practiceimg: string = require('../../assets/images/practice-tests.png') as string;
const sampleItemsImg: string = require('../../assets/images/sample-items.png') as string;
const digitalLibraryImg: string = require('../../assets/images/digital-library.png') as string;

const linkProps: AppLinkProps[] = [
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

const AppsPageComponent: React.SFC = () => (
  <React.Fragment>
    <div className="content">
      <div className="apps">
        {linkProps.map((props: AppLinkProps, idx: number) => (
          <AppLink key={idx} {...props} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .apps {
        height: 620px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </React.Fragment>
);

export const AppsPage = genericLayout(<Title>My Resources</Title>, AppsPageComponent);

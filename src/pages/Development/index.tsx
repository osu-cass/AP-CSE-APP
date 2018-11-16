import React from 'react';
import { Colors, Styles } from '../../constants';
import { ContentNav } from '../../components/ContentNav/index';
import { ItemProps } from '../../components/ContentNav/Item';
import { LinkButton } from '../../components/LinkButton/index';
import { FileText } from 'react-feather';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';
import { ContentSection, GenericContentPage } from '../../components/GenericContentPage';
import css from 'styled-jsx/css';

const fileIcon = <FileText size={40} color={Colors.sbWhite} />;

const rowStyle = css`
  .row {
    display: flex;
    align-items: stretch;
  }
`;

const DevOverview: React.SFC = () => (
  <div>
    <p>
      "Test Development and Design" is the title given to the full-cycle of constructing all
      assessment. Smarter Balanced development process involves educators at every stage. Along with
      creating an innovative assessment, Smarter Balanced is committed to an unprecedented level of
      transparency, so that anyone who is interested can see exactly how the test is made.
    </p>
    <p>
      On this page we provide the following materials used in the process of developing the Smarter
      Balanced assessment system.
    </p>
    <ul>
      <li>Summative Test Blueprints</li>
      <li>Interim Assessment Overview and Blueprints</li>
      <li>Item Specifications, Accessibility, and Guidelines</li>
      <li>Content Specifications</li>
    </ul>
  </div>
);

const DevTestBlueprint: React.SFC = () => (
  <React.Fragment>
    <p>
      The Smarter Balanced summative test blueprints describe the content of the English language
      arts/literacy and math summative assessments for grades 3-8 and high school - and how that
      content will be assessed. Developed with broad input from member states, partners, and
      stakeholders, the summative test blueprints reflect the depot and breadth of the performance
      expectations of the Common Core State Standards. Smarter Balanced Governing Members adopted
      the preliminary test blueprints in 2012 and the summative test blueprints reflect refinements
      and revisions after the analysis of the Pilot and Field Tests. The test blueprints include
      critical information about the number of questions, score points, and depth of knowledge for
      items associated with each assessment target. They will continue to guide the development of
      questions and performance tasks, score reporting, and ongoing research.
    </p>
    <div className="row">
      <LinkButton text="ELA/Literacy Blueprint" icon={fileIcon} url="" />
      <LinkButton text="Mathematics Blueprint" icon={fileIcon} url="" />
      <LinkButton text="Estimated Testing Times" icon={fileIcon} url="" />
      <LinkButton text="Enhanced CAT Blueprints" icon={fileIcon} url="" />
    </div>
    <style jsx>{rowStyle}</style>
  </React.Fragment>
);

const DevInterimBlueprint: React.SFC = () => (
  <div className="container">
    <div className="right-margin">
      <h4>Interim Assessments Overview</h4>
      <div className="row">
        <LinkButton text="Overview" icon={fileIcon} url="" />
      </div>
    </div>
    <div className="right-margin">
      <h4>Interim Assessment Block (IAB) Blueprints</h4>
      <div className="row">
        <LinkButton text="ELA/Literacy IAB Blueprint" icon={fileIcon} url="" />
        <LinkButton text="Mathematics IAB Blueprint" icon={fileIcon} url="" />
      </div>
    </div>
    <div className="right-margin">
      <h4>Interim Comprehensive Assessment (ICA) Blueprints</h4>
      <div className="row">
        <LinkButton text="ELA/Literacy ICA Blueprint" icon={fileIcon} url="" />
        <LinkButton text="Mathematics ICA Blueprint" icon={fileIcon} url="" />
      </div>
    </div>

    <style jsx>{rowStyle}</style>
    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
      }

      .right-margin {
        margin-right: ${Styles.paddingUnit};
      }
    `}</style>
  </div>
);

// const ItemContent: React.SFC = () => (
//   <React.Fragment>
//     <h1>Item Specifications Overview</h1>
//     <h2>Performance Task Specifications Overview</h2>
//     <p>
//       The Performance Tasks in English language arts (ELA) and mathematics will provide measures of
//       students’ achievement (proficiency in meeting grade-level standards), academic growth, and
//       progress toward college and career readiness. The domain of performance assessment is quite
//       broad, encompassing a range of response tasks. A Smarter Balanced performance task involves
//       significant interaction of students with stimulus materials and/or engagement in a problem
//       solution, ultimately leading to an exhibition of the students’ application of knowledge and
//       skills, often in writing or spoken language. Stimuli include a variety of information forms,
//       as well as an assignment or problem situation.
//     </p>
//     <h2>CAT Item Specifications Overview</h2>
//     <p>
//       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
//       laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
//       beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//       odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
//       Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
//       sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//       voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
//       laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
//       qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
//       fugiat quo voluptas nulla pariatur?
//     </p>
//     <div style={rowStyle}>
//       <LinkButton {...{ text: 'Performance Tasks Specifications', icon: fileIcon, url: '' }} />
//       <LinkButton {...{ text: 'CAT Item Specifications', icon: fileIcon, url: '' }} />
//       <LinkButton {...{ text: 'Bibliography', icon: fileIcon, url: '' }} />
//     </div>
//     <style jsx>{rowStyle}</style>
//   </React.Fragment>
// );

// const ContentContent: React.SFC = () => (
//   <div>
//     <h2>Content Specifications</h2>
//     <p>
//       Smarter Balanced has developed content specifications in English language arts/literacy and
//       math to ensure that the assessments cover the range of knowledge and skills in the Common Core
//       State Standards. The content specifications serve as the basis for the Smarter Blanaced system
//       of summative and iterim assessments and formative assessment support for ht eteachers. Dr.
//       Lina Darlin-Hammond, former Smarter Balanced Senior Research Advisor and Charles E. Ducommun,
//       Professor of Education Emeritus at Standford University, led the development of the content
//       specifications on collaboration with expers in the field. The Smarter Balanced Technical
//       Advisory Committee, Consortium work groups, and the lead authors of the Common Core State
//       Standards also contributed to the documents. Hundreds of organizations and individual
//       stakeholders provided feedback during two rounds of publich comment.
//     </p>
//     <h3>Introduction to ELA Content Specifications</h3>
//     <p>
//       Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Id porta nibh venenatis cras
//       sed felis eget velit. Aliquam purus sit amet luctus venenatis lectus. Pharetra vel turpis nunc
//       eget lorem dolor sed. Volutpat est velit egestas dui id ornare arcu odio ut. Porttitor leo a
//       diam sollicitudin tempor. A diam maecenas sed enim ut sem viverra aliquet. Magna eget est
//       lorem ipsum dolor. Platea dictumst quisque sagittis purus sit amet volutpat. Odio aenean sed
//       adipiscing diam donec adipiscing tristique risus. Sem fringilla ut morbi tincidunt augue
//       interdum velit. At imperdiet dui accumsan sit amet nulla facilisi morbi. Sed vulputate mi sit
//       amet mauris commodo quis imperdiet massa. Varius sit amet mattis vulputate enim nulla aliquet
//       porttitor. Ipsum faucibus vitae aliquet nec ullamcorper. In metus vulputate eu scelerisque.
//       Est ante in nibh mauris.
//     </p>
//     <h3>Introduction to Math Content Specifications</h3>
//     <p>
//       Integer eget aliquet nibh praesent tristique magna sit amet purus. Ut venenatis tellus in
//       metus vulputate eu. Tristique magna sit amet purus gravida quis blandit. Senectus et netus et
//       malesuada fames. Arcu risus quis varius quam quisque id diam vel quam. Purus viverra accumsan
//       in nisl nisi scelerisque. Lorem donec massa sapien faucibus et. A condimentum vitae sapien
//       pellentesque habitant morbi. Ac odio tempor orci dapibus ultrices in iaculis. Bibendum at
//       varius vel pharetra vel turpis. Dictum sit amet justo donec enim diam. Aliquam id diam
//       maecenas ultricies mi. Adipiscing diam donec adipiscing tristique. Eu consequat ac felis donec
//       et odio pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla
//       facilisi. Diam in arcu cursus euismod quis. Sed faucibus turpis in eu mi.
//     </p>
//     <div style={rowStyle}>
//       <LinkButton {...{ text: 'ELA/Literacy Content Specifications', icon: fileIcon, url: '' }} />
//       <LinkButton {...{ text: 'ELA Stimulus Specifications', icon: fileIcon, url: '' }} />
//       <LinkButton {...{ text: 'Mathematics Content Specifications', icon: fileIcon, url: '' }} />
//       <LinkButton {...{ text: 'Content Specifications Full Download', icon: fileIcon, url: '' }} />
//     </div>
//     <style jsx>{}</style>
//   </div>
// );

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
  }
];

const DevelopmentPageComponent: React.SFC = () => <GenericContentPage contentSections={sections} />;

export const DevelopmentPage = genericLayout(
  <Title>Learn About Test Development and Design</Title>,
  DevelopmentPageComponent
);

// export const MenuItems: ItemProps[] = [
//   {
//     name: 'Overview',
//     subItems: [],
//     contentKey: 'Overview'
//   },
//   {
//     name: 'Test Blueprints',
//     subItems: [],
//     contentKey: 'Test Blueprints'
//   },
//   {
//     name: 'Item Specifications',
//     subItems: [
//       {
//         name: 'Item Specifications Overview'
//       },
//       {
//         name: 'Accessibility for Items'
//       },
//       {
//         name: 'Additional Item Specification Resources'
//       },
//       {
//         name: 'Full Item Specifications'
//       }
//     ],
//     contentKey: 'Item Specifications'
//   },
//   {
//     name: 'Content Specifications',
//     subItems: [],
//     contentKey: 'Content Specifications'
//   }
// ];

// export interface DevelopmentPageState {
//   activeContent?: JSX.Element;
// }

// /**
//  * Renders a static test page
//  * @export
//  * @class {TestPage}
//  * @param {DevelopmentPageProps} item
//  */
// class DevelopmentPageComponent extends React.Component<{}, DevelopmentPageState> {
//   constructor(props: {}) {
//     super(props);

//     this.state = { activeContent: OverviewContent };
//   }

//   onSelect = (contentKey: string | undefined) => {
//     if (this.state && contentKey) {
//       this.setState({ activeContent: contentMapping[contentKey] });
//     }
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="page-container">
//           <div className="left-menu">
//             <ContentNav items={MenuItems} onSelect={this.onSelect} />
//           </div>
//           <div id="main-content" className="content-pane">
//             {this.state.activeContent}
//           </div>
//         </div>
//         <style jsx>{`
//           .content-pane {
//             margin-right: auto;
//             padding-left: 1em;
//             padding-top: 0;
//             font-family: PT Sans Caption;
//           }
//           .page-container {
//             display: flex;
//             justify-content: space-between;
//           }
//           .left-menu {
//             margin-left: 8em;
//           }
//         `}</style>
//       </React.Fragment>
//     );
//   }
// }

// export const DevelopmentPage = genericLayout(
//   <Title>Learn About Test Development and Design</Title>,
//   DevelopmentPageComponent
// );

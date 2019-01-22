import React from 'react';
import css from 'styled-jsx/css';
import { FileText } from 'react-feather';

import { LinkButton } from '../LinkButton';
import { Styles, Colors } from '../../constants/style';

const fileIcon = <FileText size={40} color={Colors.sbWhite} />;

const rowStyle = css`
  .row {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;

export const DevOverview: React.SFC = () => (
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

export const DevTestBlueprint: React.SFC = () => (
  <React.Fragment>
    <p>
      The Smarter Balanced summative test blueprints describe the content of the English language
      arts/literacy and math summative assessments for grades 3-8 and high school - and how that
      content will be assessed. Developed with broad input from member states, partners, and
      stakeholders, the summative test blueprints reflect the depth and breadth of the performance
      expectations of the Common Core State Standards. Smarter Balanced Governing Members adopted
      the preliminary test blueprints in 2012 and the summative test blueprints reflect refinements
      and revisions after the analysis of the Pilot and Field Tests. The test blueprints include
      critical information about the number of questions, score points, and depth of knowledge for
      items associated with each assessment target. They will continue to guide the development of
      questions and performance tasks, score reporting, and ongoing research.
    </p>
    <div className="row">
      <LinkButton
        text="ELA/Literacy Blueprints"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/elaliteracy-summative-assessment-blueprint.pdf"
      />
      <LinkButton
        text="Mathematics Blueprints"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/mathematics-summative-assessment-blueprint.pdf"
      />
      <LinkButton
        text="Estimated Testing Times"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/estimated-testing-times.pdf"
      />
    </div>
    <style jsx>{rowStyle}</style>
  </React.Fragment>
);

export const DevInterimBlueprint: React.SFC = () => (
  <div className="column">
    <div className="right-margin">
      <h4>Interim Assessments Overview</h4>
      <div className="row">
        <LinkButton
          text="Overview"
          icon={fileIcon}
          url="https://portal.smarterbalanced.org/library/en/interim-assessments-overview.pdf"
        />
      </div>
    </div>
    <div className="right-margin">
      <h4>Interim Assessment Block (IAB) Blueprints</h4>
      <div className="row">
        <LinkButton
          text="ELA/Literacy IAB Blueprints"
          icon={fileIcon}
          url="https://portal.smarterbalanced.org/library/en/english-language-artsliteracy-interim-assessment-blocks-fixed-form-blueprint.pdf"
        />
        <LinkButton
          text="Mathematics IAB Blueprints"
          icon={fileIcon}
          url="https://portal.smarterbalanced.org/library/en/math-interim-assessment-blocks-blueprint.pdf"
        />
      </div>
    </div>
    <div className="right-margin">
      <h4>Interim Comprehensive Assessment (ICA) Blueprints</h4>
      <div className="row">
        <LinkButton
          text="ELA/Literacy ICA Blueprints"
          icon={fileIcon}
          url="https://portal.smarterbalanced.org/library/en/ela-literacy-interim-comprehensive-assessment-blueprint.pdf"
        />
        <LinkButton
          text="Mathematics ICA Blueprints"
          icon={fileIcon}
          url="https://portal.smarterbalanced.org/library/en/mathematics-interim-comprehensive-assessment-blueprint.pdf"
        />
      </div>
    </div>

    <style jsx>{rowStyle}</style>
    <style jsx>{`
      .right-margin {
        margin-right: ${Styles.paddingUnit};
      }
    `}</style>
  </div>
);

export const DevItemSpecOverview: React.SFC = () => (
  <React.Fragment>
    <h4>Performance Task Specifications Overview</h4>
    <p>
      The Performance Tasks in English language arts (ELA) and mathematics will provide measures of
      students’ achievement (proficiency in meeting grade-level standards), academic growth, and
      progress toward college and career readiness. The domain of performance assessment is quite
      broad, encompassing a range of response tasks. A Smarter Balanced performance task involves
      significant interaction of students with stimulus materials and/or engagement in a problem
      solution, ultimately leading to an exhibition of the students’ application of knowledge and
      skills, often in writing or spoken language. Stimuli include a variety of information forms,
      as well as an assignment or problem situation.
    </p>
    <h4>CAT Item Specifications Overview</h4>
    <div className="row">
      <LinkButton
        text="Performance Tasks Specifications"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/performance-tasks-specifications.pdf"
      />
      <LinkButton text="CAT Item Specifications" icon={fileIcon} url="" />
      <LinkButton
        text="Bibliography"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/item-and-task-specifications-bibliography.pdf"
      />
    </div>
    <style jsx>{rowStyle}</style>
  </React.Fragment>
);

export const DevAccForItems: React.SFC = () => (
  <React.Fragment>
    <h4>Accessibility Guidelines</h4>
    <div className="row">
      <LinkButton
        text="General Accessibility"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/general-accessibility-guidelines.pdf"
      />
      <LinkButton
        text="Accessibility for ELs"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/guidelines-for-accessibility-for-english-language-learners.pdf"
      />
      <LinkButton
        text="Signing Guidelines"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/signing-guidelines.pdf"
      />
      <LinkButton
        text="Tactile Guidelines"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/tactile-accessibility-guidelines.pdf"
      />
      <LinkButton
        text="Bias and Sensitivity"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/bias-and-sensitivity-guidelines.pdf"
      />
    </div>
    <h4>Audio Guidelines</h4>
    <div className="row">
      <LinkButton
        text="ELA"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/ela-audio-guidelines.pdf"
      />
      <LinkButton text="Math" icon={fileIcon} url="" />
    </div>
    <h4>Scoring Guides</h4>
    <div className="row">
      <LinkButton
        text="Short-Text Math"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/scoring-guide-for-selected-short-text-mathematics-items.pdf"
      />
      <LinkButton
        text="ELA Full Writes"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/scoring-guide-for-ela-full-writes.pdf"
      />
    </div>
    <h4>Miscellaneous Guidelines</h4>
    <div className="row">
      <LinkButton
        text="Formulas & Conversations"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/mathematics-guidelines-for-inclusion-of-measurement-conversions-and-formulas.pdf"
      />
      <LinkButton
        text="Calculator Availability"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/calculator-availability-for-operational-assessments.pdf"
      />
      <LinkButton
        text="Style Guide for Assessments"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/style-guide-for-smarter-balanced-assessments.pdf"
      />
      <LinkButton
        text="Classroom Activities FAQ"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/classroom-activities-faq-and-guidance.pdf"
      />
    </div>
    <style jsx>{rowStyle}</style>
  </React.Fragment>
);

export const DevAddtlItemSpec: React.SFC = () => (
  <React.Fragment>
    <h4>ELA Stimulus Specifications</h4>
    <div className="row">
      <LinkButton
        text="ELA Stimulus Specifications"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/ela-stimulus-specifications.pdf"
      />
    </div>
    <h4>Additional Guidelines</h4>
    <div className="row">
      <LinkButton
        text="Formulas and Conversions"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/mathematics-guidelines-for-inclusion-of-measurement-conversions-and-formulas.pdf"
      />
      <LinkButton
        text="Bias and Sensitivity"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/bias-and-sensitivity-guidelines.pdf"
      />
    </div>
    <h4>Calculator Availability by Grade Level</h4>
    <div className="row">
      <LinkButton
        text="Calculator Availability"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/calculator-availability-for-operational-assessments.pdf"
      />
    </div>
    <h4>Elaborations for ELA PT Full Writes</h4>
    <div className="row">
      <LinkButton
        text="Opinion"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/performance-task-writing-rubric-opinion.pdf"
      />
      <LinkButton
        text="Narrative"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/performance-task-writing-rubric-narrative.pdf"
      />
    </div>
    <h4>Elaborations for ELA Full Writes</h4>
    <div className="row">
      <LinkButton text="Informational/Explanatory" icon={fileIcon} url="" />
      <LinkButton
        text="Argumentative"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/performance-task-writing-rubric-argumentative.pdf"
      />
    </div>
    <style jsx>{rowStyle}</style>
  </React.Fragment>
);

export const DevFullItemSpec: React.SFC = () => (
  <div className="row">
    <LinkButton text="ELA" icon={fileIcon} url="" />
    <LinkButton text="Mathematics" icon={fileIcon} url="" />
    <LinkButton text="CAT" icon={fileIcon} url="" />
    <LinkButton text="Performance Tasks" icon={fileIcon} url="" />
    <LinkButton text="ELA for Grades 3-5" icon={fileIcon} url="" />
    <LinkButton text="ELA for Grades 6-8" icon={fileIcon} url="" />
    <LinkButton text="ELA for High School" icon={fileIcon} url="" />
    <style jsx>{rowStyle}</style>
  </div>
);

export const DevContentSpec: React.SFC = () => (
  <React.Fragment>
    <p>
      Smarter Balanced has developed content specifications in English language arts/literacy and
      math to ensure that the assessments cover the range of knowledge and skills in the Common Core
      State Standards. The content specifications serve as the basis for the Smarter Balanced system
      of summative and interim assessments and formative assessment support for teachers. Dr. Linda
      Darling-Hammond, former Smarter Balanced Senior Research Advisor, and Charles E. Ducommun,
      Professor of Education Emeritus at Stanford University, led the development of the content
      specifications in collaboration with experts in the field. The Smarter Balanced Technical
      Advisory Committee, Consortium work groups, and the lead authors of the Common Core State
      Standards also contributed to the documents. Hundreds of organizations and individual
      stakeholders provided feedback during two rounds of public comment.
    </p>
    <div className="row">
      <LinkButton
        text="ELA/Literacy Content Specifications"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/english-language-artsliteracy-content-specifications.pdf"
      />
      <LinkButton
        text="ELA Stimulus Specifications"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/ela-stimulus-specifications.pdf"
      />
      <LinkButton
        text="Mathematics Content Specifications"
        icon={fileIcon}
        url="https://portal.smarterbalanced.org/library/en/mathematics-content-specifications.pdf"
      />
      <style jsx>{rowStyle}</style>
    </div>
  </React.Fragment>
);

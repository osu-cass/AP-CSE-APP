import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { SubjectType, GradeType, ClaimType } from './BreadcrumbModel';
import { BreadcrumbLink } from './BreadcrumbLink';

/**
 * Properties for Breadcrumbs
 * @export
 * @interface BreadcrumbsProps
 */
export interface BreadcrumbsProps {
  subject?: SubjectType;
  grade?: GradeType;
  claim?: ClaimType;
  target?: string;
}

const style = {
  color: 'white'
};

/**
 * Renders breadcrumbs starting with a home button. It renders the only props that exist
 * @export
 * @function {Breadcrumbs}
 * @param {SubjectType | undefined} subject
 * @param {GradeType | undefined} grade
 * @param {ClaimType | undefined} claim
 * @param {string | undefined} target
 */
export const Breadcrumbs = ({ subject, grade, claim, target }: BreadcrumbsProps) => (
  <div>
    <ul>
      <li>
        <Link style={style} to="/">
          <Home />
        </Link>
      </li>
      {subject && <BreadcrumbLink link={`/${subject}`} value={subject} />}
      {subject && grade && <BreadcrumbLink link={`/${subject}/${grade}`} value={grade} />}
      {subject &&
        grade &&
        claim && <BreadcrumbLink link={`/${subject}/${grade}/${claim}`} value={claim} />}
      {subject &&
        grade &&
        claim &&
        target && (
          <BreadcrumbLink link={`/${subject}/${grade}/${claim}/${target}`} value={target} />
        )}
    </ul>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      div {
        opacity: 1;
      }
      div ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        overflow: auto;
      }
      div ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
      }
    `}</style>
  </div>
);

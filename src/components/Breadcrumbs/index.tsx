import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from './BreadcrumbLink';
import { Styles, Colors } from '../../constants';

/**
 * Properties for Breadcrumbs
 * @export
 * @interface BreadcrumbsProps
 */
export interface BreadcrumbsProps {
  subject?: string;
  grade?: string;
  claim?: string;
  target?: string;
}

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
        <Link to="/">
          <span aria-label="Home">
            <Home color={Colors.sbWhite} />
          </span>
        </Link>
      </li>
      {subject && <BreadcrumbLink link={`/${subject}`} value={subject} label="Subject" />}
      {subject &&
        grade && <BreadcrumbLink link={`/${subject}/${grade}`} value={grade} label="Grade" />}
      {subject &&
        grade &&
        claim && (
          <BreadcrumbLink link={`/${subject}/${grade}/${claim}`} value={claim} label="Claim" />
        )}
      {subject &&
        grade &&
        claim &&
        target && (
          <BreadcrumbLink
            link={`/${subject}/${grade}/${claim}/${target}`}
            value={target}
            label="Target"
          />
        )}
    </ul>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      a {
        color: white;
      }
      div {
        display: flex;
        justify-content: center;
        opacity: 1;
      }
      div ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        list-style-type: none;
        overflow: auto;
        width: ${Styles.targetContentWidth};
        font-family: ${Styles.sbSans};
        border-bottom: 1px solid #66a1c1;
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

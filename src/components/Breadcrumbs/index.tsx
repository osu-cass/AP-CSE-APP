import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from './BreadcrumbLink';
import { Styles, Colors } from '../../constants';
import { CSEFilterParams, CSESearchQuery } from '../../models/filter';
import { stringify } from 'query-string';

/**
 * Properties for Breadcrumbs
 * @export
 * @interface BreadcrumbsProps
 */
export interface BreadcrumbsProps {
  subject?: string;
  grades?: string[];
  claim?: string;
  target?: string;
}

/**
 *
 * @param subject
 * @param grade
 * @param claim
 */
function buildSearchUrl(subject?: string, grades?: string[], claim?: string): string {
  const filterParams: CSEFilterParams = {
    subject,
    claim,
    grades: grades ? grades : []
  };
  const query: CSESearchQuery = {
    ...filterParams
  };
  const queryString = stringify(query);

  return `/search?${queryString}`;
}

/**
 * Renders breadcrumbs starting with a home button. It renders the only props that exist
 * @export
 * @function {Breadcrumbs}
 * @param {SubjectType | undefined} subject
 * @param {GradeType | undefined} grades
 * @param {ClaimType | undefined} claim
 * @param {string | undefined} target
 */
export const Breadcrumbs = ({ subject, grades, claim, target }: BreadcrumbsProps) => (
  <div>
    <ul>
      <li>
        <Link to="/">
          <span aria-label="Home">
            <Home color={Colors.sbWhite} />
          </span>
        </Link>
      </li>
      {subject && <BreadcrumbLink link={buildSearchUrl(subject)} value={subject} label="Subject" />}
      {subject && grades && (
        <BreadcrumbLink
          link={buildSearchUrl(subject, grades)}
          value={grades[0] === 'HS' ? 'High School' : `Grade ${grades[0]}`}
          label="Grade"
        />
      )}
      {subject && grades && claim && (
        <BreadcrumbLink link={buildSearchUrl(subject, grades, claim)} value={claim} label="Claim" />
      )}
      {subject && grades && claim && target && <div />}
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

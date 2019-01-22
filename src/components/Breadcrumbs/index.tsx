import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';
import MediaQuery from 'react-responsive';
import { SearchBaseModel } from '@osu-cass/sb-components';

import { BreadcrumbLink } from '../BreadcrumbLink';
import { Styles, Colors } from '../../constants/style';
import { DesktopBreakSize } from '../MediaQueryWrapper';
import { BreadcrumbDropDown } from '../BreadcrumbDropDown';
import { CSEFilterParams, CSESearchQuery } from '../../models/filter';

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
  targetList?: SearchBaseModel[];
  targetShortCode?: string;
  claimId?: string;
}

const isHS = (a: string) => {
  return parseInt(a, 10) >= 9 && parseInt(a, 10) <= 12 ? true : false;
};
/**
 *
 * @param subject
 * @param grade
 * @param claim
 */
export function buildSearchUrl(subject?: string, grades?: string[], claim?: string): string {
  const filterParams: CSEFilterParams = {
    subject,
    claim,
    grades: grades ? grades : []
  };
  filterParams.grades = isHS(filterParams.grades[0]) ? ['9,10,11,12'] : filterParams.grades;
  const query: CSESearchQuery = {
    ...filterParams
  };
  const queryString = stringify(query);

  return `/explore?filter=open&${queryString}`;
}

const background = {
  backgroundImage: `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`
};

/**
 * Renders breadcrumbs starting with a home button. It renders the only props that exist
 * @export
 * @function {Breadcrumbs}
 * @param {SubjectType | undefined} subject
 * @param {GradeType | undefined} grades
 * @param {ClaimType | undefined} claim
 * @param {string | undefined} target
 */
export const Breadcrumbs = ({ subject, grades, claim, target, targetList, targetShortCode, claimId }: BreadcrumbsProps) => {
  let currentTarget: SearchBaseModel | undefined;
  if (targetShortCode && targetList) {
    currentTarget = targetList.find(t => t.code === targetShortCode);
  }

  return (
    <div>
      <div className="breadCrumbContainer">
        <ul>
          <li>
            <Link to="/">
              <span aria-label="Home" className="home">
                <Home color={Colors.sbWhite} />
              </span>
            </Link>
          </li>
          {subject && (
            <BreadcrumbLink link={buildSearchUrl(subject)} value={subject} label="Subject" />
          )}
          {subject && grades && (
            <BreadcrumbLink
              link={buildSearchUrl(subject, grades)}
              value={grades[0] === 'HS' || isHS(grades[0]) ? 'High School' : `Grade ${grades[0]}`}
              label="Grade"
            />
          )}
          <MediaQuery {...DesktopBreakSize}>
            {subject && grades && claim && (
              <BreadcrumbLink
                link={buildSearchUrl(subject, grades, claimId)}
                value={claim}
                label="Claim"
              />
            )}
            {subject && grades && claim && target && currentTarget && (
              <div>
                <BreadcrumbDropDown currentTarget={currentTarget} targets={targetList} />
              </div>
            )}
          </MediaQuery>
        </ul>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
        }

        div ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: left;
          list-style-type: none;
          width: ${Styles.targetContentWidth};
          font-family: ${Styles.sbSans};
        }

        .home {
          position: relative;
          top: 5px;
          left: 5px;
        }

        div ul li {
          display: flex;
          width: 35px;
          height: 35px;
        }

        .breadCrumbContainer {
          background-image: linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter});
          overflow: visible;
        }
      `}</style>
    </div>
  );
};

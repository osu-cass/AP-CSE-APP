import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';
import { BreadcrumbDropDown } from '../BreadcrumbDropDown/BreadCrumbDropDown';
import { Styles, Colors } from '../../constants/style';
import { CSEFilterParams, CSESearchQuery } from '../../models/filter';
import { stringify } from 'query-string';
import { SearchBaseModel } from '@osu-cass/sb-components';

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
export const Breadcrumbs = ({ subject, grades, claim, target, targetList }: BreadcrumbsProps) => {
  let currentTarget: SearchBaseModel | undefined;
  if (target && targetList) {
    currentTarget = targetList.find(
      t => t.code === window.location.pathname.replace('/target/', '')
    );
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
              value={grades[0] === 'HS' ? 'High School' : `Grade ${grades[0]}`}
              label="Grade"
            />
          )}
          {subject && grades && claim && (
            <BreadcrumbLink
              link={buildSearchUrl(subject, grades, claim)}
              value={claim}
              label="Claim"
            />
          )}
          {subject && grades && claim && target && currentTarget && (
            <div>
              <BreadcrumbDropDown currentTarget={currentTarget} targets={targetList} />
            </div>
          )}
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

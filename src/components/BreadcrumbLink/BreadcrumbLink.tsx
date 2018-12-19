import React from 'react';
import { Link } from 'react-router-dom';
import { ClaimType, GradeType, SubjectType } from '../Breadcrumbs/BreadcrumbModel';
import { Colors } from '../../constants/style';

/**
 * Properties for BreadcrumbLink
 * @export
 * @interface BreadcrumbLinkProps
 */
export interface BreadcrumbLinkProps {
  link: string;
  value: SubjectType | GradeType | ClaimType | string;
  label: string;
  className?: string;
}

const style = {
  paddingLeft: '20px',
  color: 'white',
  textDecoration: 'none'
};

/**
 * Renders an arrow-shaped separator and a breadcrumb
 * @export
 * @function {BreadcrumbLink}
 * @param {string} link
 * @param {SubjectType | GradeType | ClaimType | string} value
 * @param {string} label
 */
export const BreadcrumbLink: React.SFC<BreadcrumbLinkProps> = ({
  link,
  value,
  label,
  className
}): JSX.Element => (
  <li className={className}>
    <Link style={style} to={link}>
      <span aria-label={label}>{value}</span>
    </Link>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      li {
        display: flex;
        align-items: center;
        height: 35px;
        overflow: hidden;
      }
      li:before {
        content: '';
        height: 32px;
        width: 32px;
        right: 20px;
        border-top: 1px solid #66a1c1;
        border-right: 1px solid #66a1c1;
        transform: rotate(45deg);
      }
    `}</style>
  </li>
);

export const ListLink: React.SFC<BreadcrumbLinkProps> = ({ link, value, label }): JSX.Element => (
  <div>
    <a href={link}>
      <span aria-label={label}>{value}</span>
    </a>
    <style jsx>{`
      color: ${Colors.sbGrayDarker};
      background: white;
      border-color: ${Colors.sbGrayDarker};
      padding: 8px;
      text-decoration: underline;
    `}</style>
  </div>
);

import React from 'react';
import { Link } from 'react-router-dom';
import { ClaimType, GradeType, SubjectType } from './BreadcrumbModel';

/**
 * Properties for BreadcrumbLink
 * @export
 * @interface BreadcrumbLinkProps
 */
export interface BreadcrumbLinkProps {
  link: string;
  value: SubjectType | GradeType | ClaimType | string;
  label: string;
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
export const BreadcrumbLink = ({ link, value, label }: BreadcrumbLinkProps) => (
  <li>
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
        border-top: 3px solid #66a1c1;
        border-right: 3px solid #66a1c1;
        transform: rotate(45deg);
      }
    `}</style>
  </li>
);
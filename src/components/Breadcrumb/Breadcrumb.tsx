import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbModel } from './BreadcrumbModel';

/**
 * Properties for Breadcrumb
 * @export
 * @interface BreadcrumbProps
 */
interface BreadcrumbProps {
  breadcrumbModel: BreadcrumbModel;
}

/**
 * Renders an arrow-shaped separator and a breadcrumb
 * @export
 * @class Breadcrumb
 * @extends {React.Component<BreadcrumbProps>}
 */
export class Breadcrumb extends React.Component<BreadcrumbProps> {
  constructor(props: BreadcrumbProps) {
    super(props);
  }

  render() {
    const { link, value } = this.props.breadcrumbModel;
    const style = {
      paddingLeft: '20px',
      color: 'white',
      textDecoration: 'none'
    };

    return (
      <li>
        <Link className="link" style={style} to={link}>
          {value}
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
  }
}

import React from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { BreadcrumbModel, BreadcrumbSortingOrders } from './BreadcrumbModel';
import { Breadcrumb } from './Breadcrumb';

/**
 * Properties for BreadcrumbGroup
 * @export
 * @interface BreadcrumbGroupProps
 */
export interface BreadcrumbGroupProps {
  breadcrumbsModel: BreadcrumbModel[];
}

/**
 * Renders a breadcrumb group starting with a home button.
 * @export
 * @class BreadcrumbGroup
 * @extends {React.Component<BreadcrumbGroupProps>}
 */
export class BreadcrumbGroup extends React.Component<BreadcrumbGroupProps> {
  constructor(props: BreadcrumbGroupProps) {
    super(props);
    this.sortBreadcrumbs();
  }

  /**
   * Sorts an array of breadcrumbs since they should be shown in order
   * @function {sortBreadcrumbs}
   */
  private sortBreadcrumbs() {
    const orders = BreadcrumbSortingOrders;
    const items = this.props.breadcrumbsModel;

    const sort = (a: BreadcrumbModel, b: BreadcrumbModel) => {
      return orders.indexOf(a.category) - orders.indexOf(b.category);
    };

    items.sort(sort);
  }

  /**
   * Renders the Breadcrumb components, the items of this breadcrumb group
   * @function {renderBreadCrumbs}
   * @returns {JSX.Element[]}
   */
  private renderBreadCrumbs(): JSX.Element[] {
    const content: JSX.Element[] = [];
    const items = this.props.breadcrumbsModel;

    items.forEach((item, index) => {
      content.push(<Breadcrumb key={`breadcrumb${index}`} breadcrumbModel={item} />);
    });

    return content;
  }

  render() {
    const style = {
      color: 'white'
    };

    return (
      <div>
        <ul>
          <li>
            <Link style={style} to="/">
              <Home />
            </Link>
          </li>
          {this.renderBreadCrumbs()}
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
  }
}

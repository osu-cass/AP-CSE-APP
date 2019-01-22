import React, { Component } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import { SearchBaseModel } from '@osu-cass/sb-components';

import { ListLink } from '../BreadcrumbLink';
import { Colors } from '../../constants/style';

export interface BreadcrumbDropDownProps {
  currentTarget: SearchBaseModel;
  targets?: SearchBaseModel[];
}

export interface BreadCrumbDropDownState {
  expanded: boolean;
}

const style = {
  marginLeft: '20px',
  color: 'white'
};

const chevronStyle = {
  marginLeft: '10px'
};

/**
 * Renders the target dropdown on the bread crumb menu
 * @export
 * @class {BreadcrumbDropDown}
 * @param {ContentNavProps} current target and list of related targets
 */
export class BreadcrumbDropDown extends Component<
  BreadcrumbDropDownProps,
  BreadCrumbDropDownState
> {
  constructor(props: BreadcrumbDropDownProps) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  onClick = () => {
    const expanded = !this.state.expanded;
    this.setState({ expanded });
  };

  handleEnterPress = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  render() {
    const { currentTarget, targets } = this.props;
    const { expanded } = this.state;
    const showChevron: boolean = targets ? targets.length > 1 : false;
    const chevron =
      expanded && showChevron ? (
        <ChevronUp size={30} color="white" className="chevron" style={chevronStyle} />
      ) : (
        <ChevronDown size={30} color="white" className="chevron" style={chevronStyle} />
      );

    return (
      <div className="root">
        <div className="breadCrumbBar">
          <li
            id="breadcrumb-dropdown"
            onClick={this.onClick}
            role="Menu"
            tabIndex={0}
            onKeyPress={this.handleEnterPress}
          >
            <div className="targetContainer" style={style}>
              <div className="targetLabel">{currentTarget.label}</div>
              {showChevron && chevron}
            </div>
          </li>
        </div>
        {expanded && targets && showChevron && (
          <div className="listContainer">
            {targets.map((t, index) => {
              return (
                <div key={index + 1} className="listItem">
                  <ListLink link={`/target/${t.code}`} value={t.label} label={t.label} />
                </div>
              );
            })}
          </div>
        )}
        <style jsx>{`
          .root {
            display: flex;
            flex: 1;
          }
          * {
            margin: 0;
            padding: 0;
          }

          .targetLabel {
            padding-top: 5px;
          }
          .targetContainer {
            width: 100%;
            display: flex;
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
            margin-top: 5px;
            border-top: 1px solid #66a1c1;
            border-right: 1px solid #66a1c1;
            transform: rotate(45deg);
          }
          .targetLabel {
            color: 'white';
          }
          .listContainer {
            position: absolute;
            margin-top: 35px;
            padding: 8px 0;
            margin-left: 50px;
            border-style: solid;
            border-width: 2px;
            border-color: ${Colors.sbGrayLighter};
            border-radius: 4px;
            background-color: white;
            z-index: 1;
          }
        `}</style>
      </div>
    );
  }
}

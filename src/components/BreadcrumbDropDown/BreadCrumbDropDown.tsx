import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbLink, ListLink } from '../BreadcrumbLink/BreadcrumbLink';
import { ChevronUp, ChevronDown, AlignCenter } from 'react-feather';
import { Colors } from '../../constants';

export interface BreadcrumbDropDownProps {
  currentTarget: TargetLabel;
  targets: TargetLabel[];
}

export interface BreadCrumbDropDownState {
  expanded: boolean;
}

export interface TargetLabel {
  label: string;
  shortCode: string;
}

const style = {
  marginLeft: '20px',
  color: 'white'
};

const chevronStyle = {
  marginLeft: '10px'
};

const menuStyle = {
  display: 'inline'
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

  render() {
    const { currentTarget, targets } = this.props;
    const { expanded } = this.state;
    const numTarget = targets.length;
    const chevron = expanded ? (
      <ChevronUp size={30} color="white" className="chevron" style={chevronStyle} />
    ) : (
      <ChevronDown size={30} color="white" className="chevron" style={chevronStyle} />
    );

    return (
      <div className="root">
        <div className="breadCrumbBar" style={menuStyle}>
          <li onClick={this.onClick} role="Menu">
            <div className="targetContainer" style={style}>
              <div className="targetLabel">{currentTarget.label}</div>
              {targets.length > 0 && chevron}
            </div>
          </li>
        </div>
        {expanded && (
          <div className="listContainer">
            {targets.map((t, index) => {
              return (
                <div key={index + 1} className="listItem">
                  <ListLink link={`/target/${t.shortCode}`} value={t.label} label={t.label} />
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
            paddingleft: 20px;
            color: 'white';
          }
          .listContainer {
            position: relative;
            top: 40px;
            right: 165px;
          }
        `}</style>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbLink, ListLink } from './BreadcrumbLink';
import { ChevronUp, ChevronDown } from 'react-feather';

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
  paddingLeft: '53px',
  color: 'white',
  textDecoration: 'none',
  paddingBottom: '30px',
  overflow: 'hidden'
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
    const chevron = expanded ? (
      <ChevronUp size={30} color="white" className="chevron" />
    ) : (
      <ChevronDown size={30} color="white" className="chevron" />
    );

    return (
      <div>
        <div onClick={this.onClick} role="Menu" style={menuStyle}>
          <BreadcrumbLink
            value={currentTarget.label}
            label={currentTarget.label}
            link={`/target/${currentTarget.shortCode}`}
            className="targetDropDown"
          />
          {chevron}
          <style jsx>{`
            .chevron {
              padding-top: 3px;
            }

            .targetDropDown {
              float: left;
            }
          `}</style>
        </div>
        {expanded && (
          <div className="listContainer">
            {targets.map((t, index) => {
              return (
                <div key={index + 1}>
                  <ListLink link={`/target/${t.shortCode}`} value={t.label} label={t.label} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbLink, ListLink } from './BreadcrumbLink';

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

    return (
      <div>
        <div onClick={this.onClick} role="Menu">
          <BreadcrumbLink
            value={currentTarget.label}
            label={currentTarget.label}
            link={`/target/${currentTarget.shortCode}`}
          />
        </div>
        {expanded && (
          <div className="listContainer">
            {targets.map(t => {
              return <ListLink link={`/target/${t.shortCode}`} value={t.label} label={t.label} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

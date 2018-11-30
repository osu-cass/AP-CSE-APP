import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbLink, ListLink } from './BreadcrumbLink';

export interface BreadcrumbDropDownProps {
  currentTarget: TargetLabel;
  targets: TargetLabel[];
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

export const BreadCrumbDropDown: React.SFC<BreadcrumbDropDownProps> = ({
  currentTarget,
  targets
}): JSX.Element => (
  <div>
    <div>
      <BreadcrumbLink
        value={currentTarget.label}
        label={currentTarget.label}
        link={`/target/${currentTarget.shortCode}`}
      />
    </div>
    <div className="listContainer">
      {targets.map(t => {
        return <ListLink link={`/target/${t.shortCode}`} value={t.label} label={t.label} />;
      })}
    </div>
  </div>
);

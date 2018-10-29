import React, { Component, Fragment } from 'react';
import { FilterItemProps, FilterItem } from '../FilterItem';
import { IClaim } from '../../models/claim';

export interface FilterItemListProps {
  claims: IClaim[];
  getTargetLink: (target: string) => string;
}

export const FilterItemList: React.SFC<FilterItemListProps> = ({ claims, getTargetLink }) => {
  const targetData: FilterItemProps[] = [];
  claims.forEach(c =>
    c.target.forEach(t =>
      targetData.push({
        subject: c.subject,
        grade: c.grades,
        claim: c.claimNumber,
        targetName: t.title,
        targetBodyText: t.description,
        targetLink: getTargetLink(t.shortCode)
      })
    )
  );
  const targetsJsx = targetData.map(t => <FilterItem {...t} />);

  return <Fragment>{targetsJsx}</Fragment>;
};

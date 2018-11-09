import React, { Component, Fragment } from 'react';
import { FilterItemProps, FilterItem } from '../FilterItem';
import { IClaim } from '../../models/claim';
import { Colors, Styles } from '../../constants';

export interface FilterItemListProps {
  claims: IClaim[];
  getTargetLink: (target: string) => string;
}

export const FilterItemList: React.SFC<FilterItemListProps> = ({ claims, getTargetLink }) => {
  const targetData: FilterItemProps[] = [];
  claims.forEach(c => {
    c.target.forEach(t => {
      targetData.push({
        subject: c.subject,
        grade: c.grades,
        claim: c.claimNumber,
        targetName: t.title,
        targetBodyText: t.description,
        targetLink: getTargetLink(t.shortCode)
      });
    });
  });
  const targetsJsx = targetData.map((t, i) => <FilterItem {...t} key={i} />);

  return (
    <Fragment>
      <h2>Results</h2>
      {targetsJsx}
      <style jsx>{`
        h2 {
          font-weight: normal;
          margin-top: ${Styles.paddingUnit};
          border-bottom: 1px solid ${Colors.sbGray};
        }
      `}</style>
    </Fragment>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Colors } from '../../constants';

export interface FilterItemProps {
  subject: string;
  grade: string[];
  claim: string;
  targetName: string;
  targetBodyText: string;
  targetLink: string;
}

const linkStyle = {
  color: '#005A93',
  fontSize: '1.3em'
};

export const FilterItem: React.SFC<FilterItemProps> = ({
  targetLink,
  targetName,
  subject,
  grade,
  claim,
  targetBodyText
}) => (
  <div>
    <div>
      <Link to={targetLink}>
        <h3>{targetName}</h3>
      </Link>
    </div>
    <div className="indented">
      <div className="breadcrumb">
        {subject} &raquo; {grade} &raquo; {claim}
      </div>
      <div>{targetBodyText}</div>
    </div>
    <hr />
    <style jsx>{`
      h3 {
        color: ${Colors.sbBlue};
        text-decoration: underline;
        margin-bottom: 0;
      }

      .breadcrumb {
        color: #aaa;
      }

      .indented {
        margin-left: 1em;
      }
    `}</style>
  </div>
);

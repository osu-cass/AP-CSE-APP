import React from 'react';
import { Link } from 'react-router-dom';

export interface FilterItemProps {
  subject: string;
  grade: string;
  claim: string;
  targetName: string;
  targetBodyText: string;
  targetLink: string;
}

const linkStyle = {
  color: '#005A93',
  fontSize: '1.5em'
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
      <Link style={linkStyle} to={targetLink}>
        {targetName}
      </Link>
    </div>
    <div className="indented">
      <div className="breadcrumb">
        {subject} &gt; {grade} &gt; {claim}
      </div>
      <div>{targetBodyText}</div>
    </div>
    <hr />
    <style jsx>{`
      .breadcrumb {
        color: #aaa;
      }

      .indented {
        margin-left: 1.5em;
      }
    `}</style>
  </div>
);

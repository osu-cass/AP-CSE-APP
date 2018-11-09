import React from 'react';

export interface FilterItemProps {
  subject: string;
  grade: string;
  claim: string;
  targetName: string;
  targetBodyText: string;
  targetLink: string;
}

const style = {
  maxWidth: '1024px',
  fontFamily: 'PT Sans Caption'
};

const linkStyle = {
  color: '#005A93',
  fontSize: '1.5em'
};

const breadcrumbStyle = {
  color: '#AAAAAA'
};

const indentedStyle = {
  marginLeft: '1.5em'
};

export const FilterItem = (props: FilterItemProps): JSX.Element => (
  <div style={style}>
    <div>
      <a style={linkStyle} href={props.targetLink}>
        {props.targetName}
      </a>
    </div>
    <div style={indentedStyle}>
      <div style={breadcrumbStyle}>
        {props.subject} &gt; {props.grade} &gt; {props.claim}
      </div>
      <div>{props.targetBodyText}</div>
    </div>
    <hr />
  </div>
);

import React from 'react';

export interface SbNavlinkProps {
  url: string;
  content: JSX.Element;
}

export const SbNavLink = ({ url, content }: SbNavlinkProps) => {
  return (
    <a>
      {content}
      <style jsx>{`
        a {
          display: flex;
          align-items: center;
        }
      `}</style>
    </a>
  );
};

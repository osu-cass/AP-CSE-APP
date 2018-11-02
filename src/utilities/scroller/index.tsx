import React from 'react';
import Scroll, { Link } from 'react-scroll';

export const scrollPageTo = (
  name: string,
  scrollOffset: number,
  referenceContainer: string | undefined
) => {
  Scroll.scroller.scrollTo(name, {
    duration: 0,
    delay: 0,
    smooth: false,
    containerId: referenceContainer,
    offset: scrollOffset
  });
};

export const renderLink = (
  referenceContainer: string | undefined,
  name: string,
  activate: ((n: string) => void) | undefined
): React.ReactNode => {
  return (
    referenceContainer && (
      <Link
        to={name}
        spy={true}
        containerId={referenceContainer}
        offset={-30}
        onSetActive={() => {
          if (activate) activate(name);
        }}
      />
    )
  );
};

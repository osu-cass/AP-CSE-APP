import Scroll from 'react-scroll';

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

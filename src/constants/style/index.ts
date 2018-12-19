export enum Colors {
  sbWhite = '#ffffff',
  sbBlue = '#006298',
  sbBlueLighter = '#0085AD',
  sbBlueDarker = '#004266',
  sbGray = '#63666A',
  sbGrayDarker = '#313335',
  sbGrayLighter = '#ebebeb',
  sbGreenLighter = '#43b02a',
  sbError = '#8B0000'
}

export enum Styles {
  shadow = '0 0.15em 0.35em 0 rgba(0,0,0,0.135)',
  paddingUnit = '20px',
  mobilePadding = '10px',
  font = '14px',
  fontLarger = '16px',
  sbLetterSpacing = '-.02em',
  sbSans = 'PT Sans Caption',
  sbSerif = 'PT Serif',
  maxPageWidth = '1024px',
  targetContentWidth = '85%'
}

export const blueGradient = `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`;
export const blueGradientDarker = `linear-gradient(90deg, ${Colors.sbBlueDarker}, ${
  Colors.sbBlue
})`;

export const blueGradientBgImg = {
  backgroundImage: blueGradient
};

export interface IconProps {
  size: number;
  color: string;
}

export const iconStyle: IconProps = {
  size: 35,
  color: Colors.sbGray
};

export const mobileIconStyle: IconProps = {
  size: 25,
  color: Colors.sbGray
};

export enum SizeBreaks {
  mobile = 500,
  tablet = 950
}

export const mediaQueries = {
  mobile: `(max-width: ${SizeBreaks.mobile}px)`,
  tabletAndMobile: `(max-width: ${SizeBreaks.tablet}px)`,
  tablet: `(min-width: ${SizeBreaks.mobile + 1}px) and (max-width: ${SizeBreaks.tablet}px)`,
  desktop: `(min-width: ${SizeBreaks.tablet + 1}px)`
};

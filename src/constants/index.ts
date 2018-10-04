export enum Colors {
  sbWhite = '#ffffff',
  sbBlue = '#006298',
  sbBlueLighter = '#0085AD',
  sbGray = '#63666A',
  sbGrayDarker = '#313335',
  sbGrayLighter = '#ebebeb',
  sbGreenLighter = '#43b02a'
}

export enum Styles {
  shadow = '0 0.15em 0.35em 0 rgba(0,0,0,0.135)',
  paddingUnit = '20px',
  fontLarger = '18px',
  sbLetterSpacing = '-.02em',
  sbSans = 'PT Sans Caption',
  sbSerif = 'PT Serif'
}

export const blueGradientBgImg = {
  backgroundImage: `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`
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

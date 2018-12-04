import React from 'react';
import { IStem } from '../../models/target';
import { UnorderedList } from './Lists';
import { parseContent } from '../MainContent/parseUtils';

export interface StemsProps {
  stemType: string;
  stems: IStem[];
}

export const Stems: React.SFC<StemsProps> = ({ stemType, stems }) => {
  const stemsJsx = stems.filter(s => s.shortStem === stemType).map(s => parseContent(s.stemDesc));

  return <UnorderedList elements={stemsJsx} />;
};

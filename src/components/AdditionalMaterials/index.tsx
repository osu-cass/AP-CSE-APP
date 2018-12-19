import React from 'react';
import { HelpCircle } from 'react-feather';
import { Styles } from '../../constants/style';
import { SbNavLink, SbNavlinkProps } from '../SbNavLink';

export interface AdditionalMaterialsProps {
  links: SbNavlinkProps[];
}

enum Content {
  sampleItemsContent = 'Sample Items, Scoring Guides and Rubrics',
  annotatedContent = 'Annotated Student Work',
  digitalLibraryContent = 'Digital Library Resources'
}

export const AdditionalMaterials: React.SFC = (): JSX.Element => {
  const buildContent = (content: string): JSX.Element => (
    <div>
      <HelpCircle />
      <p>{content}</p>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        p {
          font-family: ${Styles.sbSans};
          padding: 0 10px;
        }
      `}</style>
    </div>
  );

  return (
    <div>
      <SbNavLink url={''} content={buildContent(Content.sampleItemsContent)} />
      <SbNavLink url={''} content={buildContent(Content.annotatedContent)} />
      <SbNavLink url={''} content={buildContent(Content.digitalLibraryContent)} />
    </div>
  );
};

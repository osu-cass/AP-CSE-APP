import React from 'react';
import { HelpCircle } from 'react-feather';
import { Styles } from '../../constants';
import { SbNavLink, SbNavlinkProps } from '../SbNavLink';

export interface AdditionalMaterialsProps {
  links: SbNavlinkProps[];
}

export const AdditionalMaterials = (): JSX.Element => {
  const sampleItemsContent = 'Sample Items, Scoring Guides and Rubrics';
  const annotatedContent = 'Annotated Student Work';
  const digitalLibraryContent = 'Digital Library Resources';
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
      <SbNavLink url={''} content={buildContent(sampleItemsContent)} />
      <SbNavLink url={''} content={buildContent(annotatedContent)} />
      <SbNavLink url={''} content={buildContent(digitalLibraryContent)} />
    </div>
  );
};

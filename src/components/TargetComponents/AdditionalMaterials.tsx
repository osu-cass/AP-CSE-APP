import React from 'react';
import { HelpCircle } from 'react-feather';

export interface AdditionalMaterialsProps {
  target: string;
}

export const AdditionalMaterials: React.SFC<AdditionalMaterialsProps> = ({ target }) => {
  const materials = [
    'Sample Items, Scoring Guides and Rubrics',
    'Annotated Student Work',
    'Digital Library Resources'
  ];
  const materialsJsx = materials.map((m, i) => (
    <div key={i}>
      <span>
        <HelpCircle size={20} />
      </span>
      {m}
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 5px 0;
        }

        span {
          padding-right: 5px;
        }
      `}</style>
    </div>
  ));

  return <React.Fragment>{materialsJsx}</React.Fragment>;
};

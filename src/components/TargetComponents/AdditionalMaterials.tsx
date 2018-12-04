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
      {m}
      <style jsx>{`
        div {
          padding: 5px;
          margin-left: 10px;
        }
      `}</style>
    </div>
  ));

  return <React.Fragment>{materialsJsx}</React.Fragment>;
};

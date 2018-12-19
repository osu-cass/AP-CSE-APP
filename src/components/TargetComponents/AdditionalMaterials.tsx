import React from 'react';
import { HelpCircle } from 'react-feather';
import { digitalLibraryLinks } from '../../constants/links';

export interface AdditionalMaterialsProps {
  target: string;
}

export const AdditionalMaterials: React.SFC<AdditionalMaterialsProps> = ({ target }) => {
  const grade = target.split('.')[1].split('G')[1];
  const subject = target.split('.')[0] === 'E' ? 'ELA' : 'MATH';
  const claim = target.split('.')[2].split('')[1];
  const targ = target.split('.')[3].split('T')[1];
  const dlLink = digitalLibraryLinks.get(target);
  const materials = () => {
    const includedMaterials = [
      <a
        href={`https://sampleitems.smarterbalanced.org/BrowseItems?Claim=${subject}${claim}&Subject=${subject}&Grade=${grade}&Target=${targ}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        'Sample Items, Scoring Guides and Rubrics'
      </a>
    ];
    const dlLink = digitalLibraryLinks.get(target);
    if (dlLink) {
      includedMaterials.push(
        <a href={dlLink} target="_blank" rel="noopener noreferrer">
          'Digital Library Resources'
        </a>
      );
    }

    return includedMaterials;
  };

  const materialsJsx = materials().map((m, i) => (
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

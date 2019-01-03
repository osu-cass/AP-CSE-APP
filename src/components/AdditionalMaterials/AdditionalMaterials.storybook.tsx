import React from 'react';
import { storiesOf } from '@storybook/react';
import { AdditionalMaterials, AdditionalMaterialsProps } from '.';

storiesOf('Additional Materials', module)
  .add('default', () => <AdditionalMaterials target="M.G8.C3.TD" />)
  .add('With Digital Library Resources', () => <AdditionalMaterials target="E.G8.C2WN.T1a" />);

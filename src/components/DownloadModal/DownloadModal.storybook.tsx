import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { DownloadModal } from '.';
import { ClaimMe } from '../PDFLink/Document/mocks/testData';

storiesOf('DownloadModal DontTest', module)
  .addDecorator(centered)
  .add('Open', () => <DownloadModal claim={ClaimMe} isOpen={true} />);

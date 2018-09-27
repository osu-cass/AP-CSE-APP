import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { PDFViewer } from '@react-pdf/renderer';

import { PDFLink } from './';
import { CustomDocument } from './Document';

storiesOf('PDFLink', module)
  .addDecorator(centered)
  .add('Default', () => <PDFLink />);

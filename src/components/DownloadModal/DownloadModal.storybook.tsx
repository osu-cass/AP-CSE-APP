import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { DownloadModal } from '.';

storiesOf('DownloadModal DontTest', module)
  .addDecorator(centered)
  .add('Download Task Model Multi-Select', () => (
    <DownloadModal
      isOpen={true}
      taskModels={[
        'Task Model 1',
        'Task Model 2',
        'Task Model 3',
        'Task Model 4',
        'Task Model 5',
        'Task Model 6'
      ]}
    />
  ));

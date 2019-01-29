import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { DownloadModal } from '.';
import { TaskButton, ToggleClassname } from './TaskButton';
import { ClaimMe } from '../PDFLink/Document/mocks/testData';

const toggleParent = (task: string): void => {
  // tslint:disable-next-line:no-console
  console.log(`${task} toggled`);
};

storiesOf('DownloadModal DontTest', module)
  .addDecorator(centered)
  .add('Open', () => <DownloadModal claim={ClaimMe} isOpen={true} closeFromParent={jest.fn()} />);

storiesOf('DownloadModal DontTest/Task Button', module)
  .addDecorator(centered)
  .add('Off', () => (
    <TaskButton
      cName={ToggleClassname.Unchecked}
      id="id"
      taskName="Task Name"
      toggled={false}
      toggleParent={toggleParent}
    />
  ))
  .add('On', () => (
    <TaskButton
      cName={ToggleClassname.Checked}
      id="id"
      taskName="Task Name"
      toggled={true}
      toggleParent={toggleParent}
    />
  ));

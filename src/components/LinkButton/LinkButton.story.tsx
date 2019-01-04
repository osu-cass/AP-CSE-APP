import React from 'react';
import { FileText } from 'react-feather';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Colors } from '../../constants/style';
import { LinkButton, LinkButtonProps } from '.';

const fileIcon = <FileText {...{ size: 40, color: Colors.sbWhite }} />;

const linkMock: LinkButtonProps = {
  url: 'www.smarterbalanced.org',
  text: 'Sample Button Text',
  icon: fileIcon
};

storiesOf('LinkButton', module)
  .addDecorator(centered)
  .add('Renders a link button', () => <LinkButton {...linkMock} />);

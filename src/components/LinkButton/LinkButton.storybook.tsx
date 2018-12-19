import React from 'react';
import { Colors } from '../../constants/style';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { LinkButton, LinkButtonProps } from '.';
import { FileText } from 'react-feather';

const fileIcon = <FileText {...{ size: 40, color: Colors.sbWhite }} />;

const linkMock: LinkButtonProps = {
  url: 'www.smarterbalanced.org',
  text: 'Sample Button Text',
  icon: fileIcon
};

storiesOf('LinkButton component', module)
  .addDecorator(centered)
  .add('Renders a link button', () => (
    <div>
      <LinkButton {...linkMock} />
    </div>
  ));

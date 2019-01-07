import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchBaseModel } from '@osu-cass/sb-components';

import { TargetTitleBar } from '.';
import { RouterDecorator } from '../../../__decorators__';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';

storiesOf('TargetDetails/TargetTitleBar', module)
  .addDecorator(RouterDecorator)
  .add('Default', () => <TargetTitleBar claim={ELAG3ClaimMock} />);

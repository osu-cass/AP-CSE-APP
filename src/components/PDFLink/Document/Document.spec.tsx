import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PDFViewer } from '@react-pdf/renderer';

import { CustomDocument } from './';

describe('CustomDocument', () => {
  it(`renders an ELA target`, () => {
    const component = shallow(CustomDocument);

    expect(toJson(component)).toMatchSnapshot();
  });
});

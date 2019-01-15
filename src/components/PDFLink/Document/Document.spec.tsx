import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { createDocument } from './';
import { elaDocumentFull } from './mocks/mockDocumentProps';

describe('CustomDocument', () => {
  it(`renders an ELA target`, () => {
    const component = shallow(createDocument(elaDocumentFull));

    expect(toJson(component)).toMatchSnapshot();
  });
});

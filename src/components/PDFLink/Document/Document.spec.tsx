import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { createDocument } from './';
import { elaDocumentFull } from './mocks/mockDocumentProps';

describe('CustomDocument', () => {
  it(`renders an ELA target`, () => {
    const component = shallow(createDocument(elaDocumentFull));
    const setPageCount = jest.fn();
    // tslint:disable-next-line: no-unsafe-any no-any
    const callBackComponent = shallow(createDocument(elaDocumentFull), setPageCount());
    expect(toJson(component)).toMatchSnapshot();
    expect(callBackComponent).toMatchSnapshot();
    expect(setPageCount).toBeCalledTimes(1);
  });
});

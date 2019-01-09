import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import { createDocument } from './Document';
import { ClaimMe } from './Document/mocks/testData';
import { DocumentProps } from './Document/DocumentModels';
import { render, PDFLink, DownloadIcon, PDFDownloadLinkRenderProps } from './';

const mockProps: DocumentProps = {
  claim: ClaimMe,
  taskModels: [],
  renderEntireTarget: true,
  renderOverview: false
};

const pdfLinkMockProps: PDFDownloadLinkRenderProps = {
  document: createDocument(mockProps),
  fileName: 'testFile'
};

describe('PDFLink component', () => {
  it('matches snapshot', () => {
    const component = shallow(<PDFLink {...pdfLinkMockProps} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  describe('render function', () => {
    it('returns a loading icon while loading', () => {
      const component = mount(render({ loading: true }));
      expect(toJson(component)).toMatchSnapshot();
    });

    it('returns a download icon when not loading', () => {
      const component = mount(render({ loading: false }));

      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('DownloadIcon component', () => {
    it('matches snapshot', () => {
      const component = mount(<DownloadIcon />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { render, PDFLink, DownloadIcon } from './';

describe('PDFLink component', () => {
  it('matches snapshot', () => {
    const component = shallow(<PDFLink />);

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

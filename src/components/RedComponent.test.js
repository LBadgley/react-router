import React from 'react';
import { shallow } from 'enzyme';
import BlueComponent from './BlueComponent';

describe('RedComponent Test', () => {
  it('renders the red component', () => {
    const wrapper = shallow(<BlueComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

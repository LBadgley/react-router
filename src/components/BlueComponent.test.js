import React from 'react';
import { shallow } from 'enzyme';
import BlueComponent from './BlueComponent';

describe('Blue Component Test', () => {
  it('renders the blue component', () => {
    const wrapper = shallow(<BlueComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import BlueComponent from './BlueComponent';

describe('Yellow Component Test', () => {
  it('renders the Yellow component', () => {
    const wrapper = shallow(<BlueComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});

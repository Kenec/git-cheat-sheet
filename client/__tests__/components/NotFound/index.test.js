import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NotFound from '../../../components/NotFound';

describe('<NotFound />', () => {

  const wrapper = shallow(<NotFound />);
  it('should render NotFound component', () => {
    expect(wrapper.find('div').at(0).length).toEqual(1);
    expect(wrapper.find('h4').at(0).text()).toEqual('The page you are looking for does not exit!');
    expect(wrapper.find('b').at(0).text()).toEqual('Go Back Home');
  });
});
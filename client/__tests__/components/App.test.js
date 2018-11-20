import React from 'react';
import { mount } from 'enzyme';
import App from '../../components/App';

describe('<App />', () => {

  const wrapper = mount(<App />);
  it('should display the App contents', () => {
    expect(wrapper.find('div').at(0).text()).toEqual('Hello World');
  });
});
import React from 'react';
import { mount, shallow } from 'enzyme';
import { App } from '../../components/App';

describe('<App />', () => {

  const props = {

  };

  const wrapper = shallow(<App />);
  it('should render the App contents', () => {
    expect(wrapper.find('BrowserRouter').at(0).length).toEqual(1);
    expect(wrapper.find('div').at(0).length).toEqual(1);
    expect(wrapper.find('Switch').at(0).length).toEqual(1);
    expect(wrapper.find('Route').length).toEqual(6);
  });

  it('should contain Routes that contain component props', () => {
    expect(wrapper.find('Route').at(0).props().path).toEqual('/');
    expect(wrapper.find('Route').at(1).props().path).toEqual('/signin');
    expect(wrapper.find('Route').at(2).props().path).toEqual('/signup');
    expect(wrapper.find('Route').at(3).props().path).toEqual('/profile');
    expect(wrapper.find('Route').at(4).props().path).toEqual('/profile/manage-cheat');
  });
});
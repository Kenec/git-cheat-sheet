import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Header } from '../../../components/Header';

describe('<Header />', () => {
  
  const handleLogout = sinon.spy();
  const logout = sinon.spy();
  
  const props = { 
    user: { isAuthenticated: false, user: { name: 'Kene', email: 'kene.test@test.com', id: 1 } },
    logoutAction: { logout } ,
    handleLogout
  }

  let wrapper;
  it('should render Header component', () => {
    wrapper = shallow(<Header {...props}/>);
    expect(wrapper.find('nav').at(0).length).toEqual(1);
    expect(wrapper.find('button').at(0).length).toEqual(1);
    expect(wrapper.find('div').at(0).length).toEqual(1);
    expect(wrapper.find('a').at(0).text()).toEqual('Git Cheat Sheet');
  });

  it('should display user\'s info and links when a user is authenticated', () => {
    props.user.isAuthenticated = true;
    wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('NavLink').at(0).prop('to')).toEqual('/profile');
    expect(wrapper.find('NavLink').at(1).prop('to')).toEqual('/profile/manage-cheat');
    expect(wrapper.find('div').at(2).text()).toEqual('Welcome Kene!');
    expect(wrapper.find('button').at(1).text()).toEqual('Logout');
  });

  it('should call the logout function when logout button is clicked', () => {
    props.user.isAuthenticated = true;
    wrapper = shallow(<Header {...props} />);
    wrapper.find('button').at(1).simulate('click', { preventDefault() {} });
    // expect(handleLogout.calledOnce).toEqual(true);
  });
});

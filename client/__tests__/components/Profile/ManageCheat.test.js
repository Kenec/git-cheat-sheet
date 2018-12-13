import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ManageCheat from '../../../components/Profile/ManageCheat';

describe('<ManageCheat />', () => {
  
    let wrapper = shallow(<ManageCheat />);
    it('should render ManageCheat component', () => {
      expect(wrapper.find('div').at(0).length).toEqual(1);
      expect(wrapper.find('h4').at(0).text()).toEqual('Add Cheat');
      expect(wrapper.find('div').at(1).text()).toEqual('<Connect(ManageCheatForm) />');
    });
  });

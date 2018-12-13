import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { ManageCheatForm } from '../../../components/Profile/ManageCheatForm';

describe('<ManageCheatForm />', () => {
  
    let wrapper = mount(<ManageCheatForm />);
    it('should render ManageCheatForm component', () => {
      // expect(wrapper.find('div').at(0).length).toEqual(1);
      // expect(wrapper.find('h4').at(0).text()).toEqual('Add Cheat');
      // expect(wrapper.find('div').at(1).text()).toEqual('<Connect(ManageCheatForm) />');

      // console.log(wrapper.debug());
    });
  });

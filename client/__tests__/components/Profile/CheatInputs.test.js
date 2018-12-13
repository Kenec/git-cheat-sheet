import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CheatInputs from '../../../components/Profile/CheatInputs';

describe('<CheatInputs />', () => {

    const props = {
      handleChange: sinon.spy(),
      inputValue: 'Test',
      index: 0
    }
  
    const wrapper = shallow(<CheatInputs {...props} />);
    it('should render CheatInputs component', () => {
      expect(wrapper.find('label').at(0).text()).toEqual('Cheat Description 1');
      expect(wrapper.find('label').at(1).text()).toEqual('Cheat Command 1');
      expect(wrapper.find('input').at(0).props().name).toEqual('desc');
      expect(wrapper.find('input').at(1).props().name).toEqual('command');
    });
  });

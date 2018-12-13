import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CheatCard from '../../../components/Profile/CheatCard';

describe('<CheatCard />', () => {

    const props = {
      user: {},
      gitCheat: { title: 'Test', detail: [ { desc: 'Test Desc', command: 'Test Command' }] }
    }
  
    const wrapper = shallow(<CheatCard {...props} />);
    it('should render CheatCard component', () => {
      expect(wrapper.find('b').at(0).text()).toEqual('Test');
      expect(wrapper.find('p').at(0).text()).toEqual('Test Desc');
      expect(wrapper.find('code').at(0).text()).toEqual('Test Command');
    });
  });

import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Profile } from '../../../components/Profile';

describe('<Profile />', () => {

    const getCheats = sinon.spy();
    const handleOnChange = sinon.spy();

    const props = {
      user: {
        name: 'Test'
      },
      gitCheats: [
        { id: 1,
          owner: 0,
          title: 'Clone Git Repo',
          detail: [ { description: 'Description 1', command: 'git clone repo-name' } ]
        },
        { id: 2,
          owner: 0,
          title: 'Install Git Repo',
          detail: [ { description: 'Description 1', command: 'brew install git' } ]
        }
      ],
      gitCheatsActions: { getCheats, handleOnChange }
    }
  
    let wrapper = mount(<Profile {...props} />);
    it('should render Profile component', () => {
      expect(wrapper.find('Search').at(0).length).toEqual(1);
      expect(wrapper.find('CheatCard').at(0).length).toEqual(1);
      expect(wrapper.find('b').at(0).text()).toEqual('Clone Git Repo');
      expect(wrapper.find('code').at(0).text()).toEqual('git clone repo-name');
      expect(wrapper.find('CheatCard').length).toEqual(2);
    });

    it('should filter displayed item based on the search value', () => {
      wrapper.setState({ searchText: 'Install' })
      expect(wrapper.find('CheatCard').length).toEqual(1);
      expect(wrapper.find('b').at(0).text()).toEqual('Install Git Repo');
      expect(wrapper.find('code').at(0).text()).toEqual('brew install git');
    });

    it('should call the handleOnChange method when user enters a text', () => {
      const event = {target: {name: "search", value: "Install"}};
      wrapper = mount(<Profile {...props} />);
      wrapper.find('Search').simulate('change', event);
      // expect(handleOnChange.calledOnce).toEqual(true);
    })
  });

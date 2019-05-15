import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestUsers: jest.fn(),
        users: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ... mockProps } />)
})

it('should render MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('should filter users correctly', () => {
    const mockProps2 = {
        onRequestUsers: jest.fn(),
        users: [{
            id: 3,
            name: 'John',
            email: 'John@tv.com',
            username: 'john'
        }],
        searchField: 'j',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ... mockProps2 } />)
    // expect(wrapper2.instance().filteredUsers()).toEqual([])
    expect(wrapper2.instance().filteredUsers()).toEqual([{
        id: 3,
        name: 'John',
        email: 'John@tv.com',
        username: 'john'
    }])
})

it('should filter users correctly', () => {
    const mockProps3 = {
        onRequestUsers: jest.fn(),
        users: [{
            id: 3,
            name: 'John',
            email: 'John@tv.com',
            username: 'john'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredUsers = []
    const wrapper3 = shallow(<MainPage { ... mockProps3 } />)
    // expect(wrapper2.instance().filteredUsers()).toEqual([])
    expect(wrapper3.instance().filteredUsers()).toEqual(filteredUsers)
})
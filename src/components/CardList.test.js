import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render CardList component', () => {
    const mockUsers = [
        {
            id: 1,
            name: "John Snow",
            username: "John",
            email: "kingofthenorth@gmail.com"
        }
    ]
    expect(shallow(<CardList users={mockUsers} />)).toMatchSnapshot();
})

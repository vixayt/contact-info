import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('should render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})

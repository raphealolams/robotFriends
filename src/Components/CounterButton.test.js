import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CouterButton';
import "../setupTests"


it('expect to render CounterButton Component', () => {
    const mockColor = 'red'

    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
}) 

it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor}/>)

    wrapper.find('#counter').simulate('click')
    wrapper.find('#counter').simulate('click')

    expect(wrapper.state()).toEqual({count: 2})

    expect(wrapper.props().color).toEqual('red')
})
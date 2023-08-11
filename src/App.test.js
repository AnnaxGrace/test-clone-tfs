import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


test('renders non-empty component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
});


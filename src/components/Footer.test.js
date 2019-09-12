import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({adapter: new Adapter()});

describe('<Footer />', () => {
    it('It renders the footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.bg-dark')).toHaveLength(1);
    });
})
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextFieldGroup from './TextFieldGroup';

configure({adapter: new Adapter()});

describe('<TextFieldGroup />', () => {
    it('It renders the TextFieldGroup', () => {
        const onChange = jest.fn()
        const wrapper = shallow(<TextFieldGroup onChange={onChange} name='name' value='ace' />);
        expect(wrapper.find('.form-group')).toHaveLength(1);
    });
})
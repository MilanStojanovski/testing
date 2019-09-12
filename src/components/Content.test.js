import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';
import TextFiledGroup from './common/TextFieldGroup';

configure({adapter: new Adapter()});

describe('<Content />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Content />);
    })

    it('It renders the content', () => {
        expect(wrapper.find(TextFiledGroup)).toHaveLength(1);
    });

    it('It renders the header', () => {
        const onClick = jest.fn()
        expect(wrapper.contains(<h1 className="text-center">List</h1>)).toEqual(true);
    });
})
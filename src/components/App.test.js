import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { App } from './App';
import { categories } from './../data/fixtures';


const props = { categories };

describe('App', () => {
    const app = shallow(<App {...props} />);

    it('renders the title', () => {
        expect(app.find('h2').text()).toEqual('Jeopardy!');
    });
});
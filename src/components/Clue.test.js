import React from 'react';
import { shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from './../data/fixtures';

const props = { clue };

describe('Clue', () => {
    const clueWrapper = shallow(<Clue {...props} />);


    it('renders the clue value', () => {
        console.log(clueWrapper.debug())
        expect(clueWrapper.find('h4').text()).toEqual(clue.value.toString);
    });

    it('renders the clue question', () => {
        expect(clueWrapper.find('h5').at(0).text()).toEqual(clue.question);
    });

    it('render she clue answer', () => {
        expect(clueWrapper.find('h5').at(1).text()).toEqual(clue.answer);
    });

    it('sets the answer with the `text-hidden` class', () => {
        expect(clueWrapper.find('h5').at(1).hasClass('text-hidden')).toBe(true);
    });

    it('initialazies the `reveal` state to be `false`', () => {
        expect(clueWrapper.hasClass.state().reveal).toBe(false);
    });
});
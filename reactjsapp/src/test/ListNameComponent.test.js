import React from 'react';
import {shallow,mount} from './../enzyme';
import ListOptionsComponent from '../componentsfortest/listoptionscomponent';
import ListNameComponent from '../componentsfortest/listnamecomponent';

describe('Testing React Component Using Enzyme and Jest', () => {
    it('should render a list based on array',()=>{
        const charcters = ['James Bond', 'Ethan Hunt', 'Indiana Jones', 'Jason Bourn', 'Jack Reacher'];
        // act
        const domTree = shallow(<ListNameComponent names={charcters}/>);
        // lets simulate the DOM
        console.log(domTree.debug());
        expect(domTree.find('.names').exists()).toBe(true);
    });

    it('should render an empty list if an array is empty',()=>{
        const charcters = [];
        // act
        const domTree = shallow(<ListNameComponent names={charcters}/>);
        // lets simulate the DOM
        console.log(domTree.debug());
        expect(domTree.find('.empty').exists()).toBe(true);
    });

    it('should render a list with children with "li" based on array',()=>{
        const charcters = ['James Bond', 'Ethan Hunt', 'Indiana Jones', 'Jason Bourn', 'Jack Reacher'];
        // act
        const domTree = mount(<ListNameComponent names={charcters}/>);
        // lets simulate the DOM
        console.log(domTree.debug());
        expect(domTree.find('li').exists()).toBe(true);
    });
        
});

import React from 'react';
// managing in-memory rendering
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import EventTestComponent from './../componentsfortest/EventTestComponent';

// lets define a test suit
describe('Test suit for the React.js Component', () => {
   
    // lets define a container object that will
    // make sure that the Component is rendered
    let domContainer = null;

    beforeEach(()=>{
        // create a container eelement as 'div' so that the component can be 
        // rendered in it
        domContainer = document.createElement('div');
        // append the domContainer in DOM created in memory
        document.body.appendChild(domContainer);
    });
    it('button click change the caption for each click',()=>{
        const onClick = jest.fn(); // Register a function callback on the onClick

        act(()=>{
            render(<EventTestComponent onClick={onClick}/>, domContainer);
        });      
        // detect the button using query
        const button  =document.querySelector('button');
        // search the div nased on the className
        const div = document.querySelector('.dv');
        // expect the initial Caption (innetHTML) of the button as 'save'
        expect(button.innerHTML).toBe('Save');
        expect(div.innerHTML).toBe('false');



        // dispatch the click event for the button
        
        act(()=>{
            for(let i=0;i<5;i++){
              button.dispatchEvent(new MouseEvent('click', {bubbles:true}));}
        });
        expect(onClick).toHaveBeenCalledTimes(5);
        // check if the button's caption is changed
        expect(button.innerHTML).toBe('Update');
        expect(div.innerHTML).toBe('true');
    });

    

    afterEach(()=>{
        // lets clean up the DOM
        // 1. UnMount the Component
        unmountComponentAtNode(domContainer);
        // 2. remove the domContainer from the DOM
        domContainer.remove();
        // 3. release the reference
        domContainer  =null;
    });
    
});


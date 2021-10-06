import React from 'react';
// managing in-memory rendering
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import HelloTestComponent from '../componentsfortest/hellotestcomponent';

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
    it('render the component with props',()=>{
        // act on the component by rendering it
        act(()=>{
            render(<HelloTestComponent message="Mahesh Sabnis"/>, domContainer);
        });
        // assertion using expect
        expect(domContainer.textContent).toBe("Hello, Mr. Mahesh Sabnis"); 
    });

    it('render the component without props',()=>{
        // act on the component by rendering it
        act(()=>{
            render(<HelloTestComponent/>, domContainer);
        });
        // assertion using expect
        expect(domContainer.textContent).toBe("Hello, Mr. NoName");
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


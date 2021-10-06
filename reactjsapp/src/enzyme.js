import Enzyme, {shallow, configure, mount} from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
    adapter: new Adapter()
});
// shallow: Point to the React Parent Component and will not read the Children
// mount: Reads all the Mounted Components in the DOM (Parent and Child)
export {shallow,mount};
export default Enzyme;
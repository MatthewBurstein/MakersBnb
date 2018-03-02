import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Test from '../../containers/Test';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Test />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Test />);
  const welcome = <h2>Welcome!!!</h2>;
  expect(wrapper).toContainReact(welcome);
});

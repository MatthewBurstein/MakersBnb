
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Links from '../../containers/Links';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Links />, div);
});

it ('renders a message'), () => {
  const wrapper = shallow(<Links />);
  const message = <h1> This is the list of properties in MakersBnb</h1>;
  expect(wrapper).toContainReact(message);
});

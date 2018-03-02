
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

it('renders a message', () => {
  const wrapper = shallow(<Links />);
  const message = <h1>This is the list of properties in MakersBnb</h1>;
  expect(wrapper).toContainReact(message);
});

it('shows an image from the database', async () => {
  expect.assertions(1);
  const wrapper = shallow(<Links />);
  const image = <img src="https://img00.deviantart.net/c73f/i/2014/001/7/7/magic_house_by_tinca2-d70b7x2.jpg"></img>;
  const page = await wrapper.renderImages();
  expect(page).toContainReact(image);
});

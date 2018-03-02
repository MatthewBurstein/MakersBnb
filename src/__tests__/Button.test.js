import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Button from '../../containers/Button';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Button', function () {
  it('should render correctly', function () {
    const wrapper = shallow(<Button />);
    const button = <button>Add a new property</button>;
    expect(wrapper).toContainReact(button);
  });
});
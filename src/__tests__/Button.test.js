import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Button from '../../containers/Button';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', function() {
  it('should render correctly', function() {
    const wrapper = shallow(<Button />);
    console.log('Button equals: ', Button);
    const button = (
      <button onClick={Button._this.renderForm}>Add a new property</button>
    );
    expect(wrapper).toContainReact(button);
  });

  // it('renders a form when the button is clicked', () => {
  //   const mockFn = jest.fn();
  //   const btn = shallow(<button onClick={mockFn}>Add a new property</button>);
  //   btn.simulate('click');
  //   expect(mockFn).toHaveBeenCalled();
  // });

  it('has a function which renders a form', () => {
    const wrapper = shallow(<Button />);
    const form = (
      <form>
        <input type="text" name="house" />
        <input type="submit" value="submit" />
      </form>
    );
    wrapper.find('button').simulate('click');
    expect(wrapper).toContainReact(form);
  });
});

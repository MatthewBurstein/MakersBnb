import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super();
    this.renderForm = this.renderForm.bind(this);
  }
  renderForm() {
    return (
      <form>
        <input type="text" name="house" />
        <input type="submit" value="submit" />
      </form>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.renderForm}>Add a new property</button>
      </div>
    );
  }
}

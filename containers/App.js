import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios.get('http://localhost:3000/properties').then(response => {
      this.setState({ properties: response.data });
      console.log('Success');
    });
  }

  render() {
    return (
      <div>
        <p>This is my new react app</p>
        <button onClick={this.handleClick}>Click to get properties</button>
        <ul>
          {this.state.properties.map(property => (
            <li key={property._id}>{property.email}</li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, {Component} from 'react';
import axios from 'axios';

export default class Test extends Component {

  constructor() {
    super();
    this.state = {
      properties: []
    };
    this.renderImages();
  }

  renderImages() {
    axios.get('http://localhost:3000/properties')
      .then(response => {
        this.setState({ properties: response.data });
        console.log(this);
        ReactDOM.render(this);
      });
  }

  render(){
    return(
      <div>
        <h1>This is the list of properties in MakersBnb</h1>
          {this.state.properties.map(property => (
            // console.log(property.imageUrl)
            <img src={property.imageUrl}></img>
            // <h1>hi</h1>
        ))}
      </div>


    );
  }




}

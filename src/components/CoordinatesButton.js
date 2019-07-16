// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  getCoords = (eventData) => {
    let array = new Array();
    array[0] = eventData.screenX;
    array[1] = eventData.screenY;
    this.props.onReceiveCoordinates(array);
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.getCoords(e)}>Location tracker</button>
      </div>
    )
  }
}
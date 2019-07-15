import React from 'react';

class CoordinatesButton extends React.Component {
  getCoordinates = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    this.props.onReceiveCoordinates([x, y]);
  };

  render() {
    return (
      <button onClick={this.getCoordinates}>Mouse Coordinates</button>
    );
  }
}

export default CoordinatesButton;

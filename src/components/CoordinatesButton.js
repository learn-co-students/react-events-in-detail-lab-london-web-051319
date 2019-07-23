// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        const coordinates = [];

        coordinates.push(event.clientX, event.clientY);

        this.props.onReceiveCoordinates(coordinates);
        // console.log(coordinates);
    }

    render() {
        return (
            <div>
                <button onClick={(event) => {
                    this.handleClick(event)
                }}>
                    Generate Coordinates
                </button>
            </div>
        )
    }
}
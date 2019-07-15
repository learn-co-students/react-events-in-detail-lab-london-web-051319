import React from 'react';

class DelayedButton extends React.Component {
  logEvent = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return (
      <button onClick={this.logEvent}>Delayed</button>
    );
  }
}

export default DelayedButton;

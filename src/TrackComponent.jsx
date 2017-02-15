import React from 'react';

class TrackComponent extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }

  render() {
    return <p>This view tracks your position and sends it to the server.</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default TrackComponent;

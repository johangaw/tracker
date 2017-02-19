import React from 'react';


class TrackComponent extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }
  
  sendPosition() {
    const position = {long: 123.123, lat: 345.345, time: 890}
    let client = new XMLHttpRequest();
    client.open('POST', '/api/v1/positions', true);
    client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    client.send(JSON.stringify(position));
  }
  
  render() {
    return (
    <div>
      <h2>This view tracks your position and sends it to the server.</h2>
      <button onClick={this.sendPosition}>Send data</button>
    </div>
    )
  }
  
  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default TrackComponent;

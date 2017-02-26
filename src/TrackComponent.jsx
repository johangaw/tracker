import React from 'react';
import { Position } from './utils';

class TrackComponent extends React.Component {
  constructor() {
    super();
    this.state = { uploaded: 0};
  }

  sendPosition() {

    if (navigator.geolocation) {
      navigator
        .geolocation
        .getCurrentPosition(position => {
          const sendablePos = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: position.timestamp,
            speed: position.coords.speed
          };
          Position.post(sendablePos).then( resp => {
            console.log(resp);
            this.setState({uploaded: this.state.uploaded++})
          }, error => {
            console.log(error);
          });
        });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div>
        <h2>This view tracks your position and sends it to the server.</h2>
        <button onClick={() => this.sendPosition()}>Send data</button>
        <h3>{this.state.uploaded}</h3>
      </div>
    )
  }

  componentDidMount() {
    console.log('Mount');
  }
}

export default TrackComponent;

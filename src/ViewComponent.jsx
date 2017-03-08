import React from 'react';
import { getNextFrameIndex } from './runner';

class ViewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      posX: 0,
      posY: 50,
      moving: false
    };
  }

  click() {
    const {posX, posY, moving} = {
      ...this.state
    }
    if (moving) {
      window.clearInterval(moving)
      this.setState({moving: false});
    } else {
      this.setState({
        moving: window.setInterval((startTime) => {
          const list = [
            {timestamp: 1, x: 50, y: 50},
            {timestamp: 2, x: 50, y: 55},
            {timestamp: 3, x: 50, y: 60},
            {timestamp: 4, x: 50, y: 65},
            {timestamp: 5, x: 50, y: 70},
            {timestamp: 6, x: 50, y: 75},
            {timestamp: 7, x: 50, y: 80},
            {timestamp: 8, x: 50, y: 85},
            {timestamp: 9, x: 50, y: 90},
            {timestamp: 10, x: 50, y: 95},
            {timestamp: 11, x: 50, y: 100},
          ]
          const diffInSeconds = (new Date().getTime() - startTime) / 1000;
          const index = getNextFrameIndex(list, diffInSeconds);
          if (index !== -1) {
            this.setState({
              posX: list[index].x,
              posY: list[index].y,
            });
          }
        }, 50, new Date().getTime())
      })
    }
  }

  render() {
    const {posX, posY} = {
      ...this.state
    }

    const mainStyle = {
      position: "relative"
    }

    const blockStyle = {
      width: "50px",
      height: "50px",
      "background-color": "green",
      position: "absolute",
      left: `${posX}px`,
      top: `${posY}px`

    }
    return (
      <div style={mainStyle}>
        <button onClick={() => this.click()}>Click Me</button>
        <div style={blockStyle}></div>
      </div>
    );
  }
}

export default ViewComponent;

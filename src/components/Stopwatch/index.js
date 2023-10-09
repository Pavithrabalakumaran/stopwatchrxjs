// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading"> Stop watch</h1>

          <div className="stopwatch-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer-image"
              alt="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

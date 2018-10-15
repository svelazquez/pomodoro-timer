import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "card mx-auto app-content">
          <div className= "card-body text-center">

            <div className= "container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center">Pomodoro Power</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center timer pb-sm-3 pt-sm-3">
                            <div className="color1"></div>
                            <div className="color2">00:00:00</div>
                            <div className="color3"></div>
                            </h2>

                    </div>
                </div>

                <div className="row">
                    <button className="btn mx-auto mb-sm-5">Start/Pause</button>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                    <h2 className="text-left">Set Timer:</h2>
                    </div>
                <div className="row">
                    <div className="col-sm-4">
                        <button className="btn">Pomodoro</button>
                    </div>
                    <div className="col-sm-4">
                        <button className="btn">Short Break</button>
                    </div>

                    <div className="col-sm-4">
                        <button className="btn">Long Break</button>
                    </div>
                </div>

                </div>
             </div>
          </div>
      </div>
    );
  }
}

export default App;

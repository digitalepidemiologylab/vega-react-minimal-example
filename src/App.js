import React, { Component } from 'react';
import './App.css';
// import Vega from 'react-vega';
import VegaLite from 'react-vega-lite';
import { Button } from 'react-bootstrap';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        "values": [
          {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
          {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34}
        ]
      }
    };
  }

  onClick() {
    this.setState({
      data: {
        "values": [
          {"a": "A","b": Math.floor(Math.random() * 100)}, {"a": "B","b": Math.floor(Math.random() * 100)}, {"a": "C","b": Math.floor(Math.random() * 100)},
          {"a": "D","b": Math.floor(Math.random() * 100)}, {"a": "E","b": Math.floor(Math.random() * 100)}, {"a": "F","b": Math.floor(Math.random() * 100)}
        ]
      }
    })
  }

  render() {
    const spec = {
      "description": "A simple bar chart with embedded data.",
      "mark": "bar",
      "width": 400,
      "height": 300,
      "padding": 40,
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative", "scale": {"domain": [0, 100]}}
      }
    };

    return (
      <div className="App">
        <h1>Minimal React Vega-Lite example</h1>
        <p>
          To get started, edit <code>src/App.js</code>
        </p>
        <Button className='btn' onClick={(ev) => this.onClick(ev)}>Get random data</Button>
        <VegaLite spec={spec} data={this.state.data} />
      </div>
    );
  }
}

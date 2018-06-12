import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {}
    };
  }

  componentDidMount() {
    fetch('https://microservice-template-dnxigvietj.now.sh/weather')
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          return {
            weather: data.weather
          };
        });
      });
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.weather)}
      </div>
    );
  }
}

export default App;

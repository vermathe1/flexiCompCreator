import React, { Component } from 'react';
import './App.css';
import flexiConfig from './config';
import Flexi from './components/flexi';

class App extends Component {
    constructor(props){
      super(props);
      this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
    }
    render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig.items}/>
      </div>
    );
  }
  onFlexiSubmit(value){
    console.log(JSON.parse(value));
  }
}

export default App;

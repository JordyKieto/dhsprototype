import React, { Component } from 'react';

import './App.css';
// import Start from './components/start';

import SetFirstName from './containers/setName';
import GetName from './containers/getName';




class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        formIndex: 0,
      };
    }
    render() {
      switch(this.state.formIndex){
        case 0:
        return(
          <SetFirstName/>
        );
        case 1:
        return(
          <GetName/>
        );
        default:
        return(
          <SetFirstName/>
        )
      }
  }
}

export default App;

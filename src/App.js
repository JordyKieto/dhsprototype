import React, { Component } from 'react';
import './App.css';
import Start from './components/start';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        formIndex: 0,
      };
    }
    prevForm(){
      if(this.state.formIndex < 0){
        this.setState({formIndex: this.state.formIndex-1})
      }
    };
    nextForm(){
      if(this.state.formIndex < 7){
        this.setState({formIndex: this.state.formIndex+1})
      }
    }
    render() {
      switch(this.state.formIndex){
        case 0:
        return(
          <Start/>
        )
        default:
        return(
          <Start/>
        )
      }
  }
}

export default App;

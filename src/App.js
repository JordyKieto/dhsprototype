import React, { Component } from 'react';
import { connect } from 'react-redux'


import './App.css';
// import Start from './components/start';

import {FirstName, LastName, Age, PhoneNumber, FamilySize, Dependant, Education, User } from './containers';




class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        formIndex: 1,
      };
    }
    render() {
      switch(this.props.formIndex){
        case 1:
          return(
            <FirstName/>
          );
        case 2:
          return(
            <LastName/>
          );
        case 3:
          return(
            <Age/>
          );
        case 4:
          return(
            <PhoneNumber/>
          );
        case 5:
          return(
            <FamilySize/>
          );
        case 6:
          return(
            <Dependant/>
          );
        case 7:
          return(
            <Education/>
          );
        case 8:
          return(
            <User/>
          );
        default:
        return(
          <FirstName/>
        )
      }
  }
}
const mapStateToProps = state => {
  console.log(state);
  console.log(state.form);
  return {
    'formIndex': state.form.formIndex
  };
};

export default connect(
  mapStateToProps
)(App);

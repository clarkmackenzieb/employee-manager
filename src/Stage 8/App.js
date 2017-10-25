import React, { Component } from 'react';

import Employee from './models/Employee';

import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';


class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        <Header/>
        <div className="main-container">
          <EmployeeList/>
          <EmployeeEditor/>
        </div>
      </div>
    )
  }
}

export default App;

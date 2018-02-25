import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './coursesales';
import Course from './course';




class App extends Component {
  render() {
    var courses=[
      {
        name:'ios10',
        price:800
      },
      {
        name:'Complete Front End',
        price:1000
      },
      {
        name:'Reactjs',
        price:800
      },
      {
        name:'Java Bootcamp',
        price:600
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Course Purchase Page</h1>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;

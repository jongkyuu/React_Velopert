// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './Counter';
import Hello from "./Hello";
import Wrapper from './Wrapper';

function App() {
  const name = "react";
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24, 
    padding : '1rem'
  }
  return (
    <Counter />

  );
}

export default App;

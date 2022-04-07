// import logo from './logo.svg';
import React from 'react';
import './App.css';
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
    <>
    <Wrapper>
        <Hello name="react" color="green" isSpecial fontSize="20px"/>
        <Hello color="pink" fontSize="20px"/>
        <div style={style}>{name}</div> 
        <div className="gray-box"></div>
    </Wrapper>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Person from './Person';

function App() {

  return (
    <>
    <Person name={'tom'} age={25} isHeStudying={true} />
    </>
  )
}

export default App

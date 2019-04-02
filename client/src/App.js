import React, { useState, useEffect } from 'react';
import logo from './Mintzer.png'
import './App.css';
import axios from 'axios'

const App = () => {

  const [list, setList] = useState([])
  useEffect(() => {
    (async () => {
      const result = await axios('/api/getList')
      setList(result.data)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REACTOship. For FSA/GH Fellows to do reactos
          </p>
        <a
          className="App-link"
          href="http://barry.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Barry.Codes
          </a>
      </header>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );

}

export default App;

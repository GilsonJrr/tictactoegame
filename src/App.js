import React, {useState, useEffect} from 'react';

import './App.css';
import Seletor from './Pages/Seletor'
import GamePage from './Pages/GamePage'

function App() {

  const [seletor, setSeletor] = useState (true);

  return (
    <div>
      { seletor 
        ? <Seletor setSeletor={setSeletor} /> 
        : <GamePage setSeletor={setSeletor}/> 
      }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  const [state, setState] = useState('all');
  const [added, setAdded] = useState(false);
  const [bgColor, setbgColor] = useState(false);
  return (
    <div className="App">
      <div className='todo' style={{'backgroundColor':bgColor ? 'aqua' : 'darkblue'}}>
        <Header setState={setState} bgColor={bgColor} setbgColor={setbgColor}/>
        <Main state={state} addedState={added} setAdded={setAdded}/>
        <Footer addedState={added} setAdded={setAdded}/>
      </div>
    </div>
  );
}

export default App;

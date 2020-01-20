import React from 'react';
import './App.css';
import Store from './store';
import Fruits from "./Fruits";

function App() {
  return (
    <Store>
      <div className="App">
        <Fruits />
      </div>
    </Store>
  );
}

export default App;

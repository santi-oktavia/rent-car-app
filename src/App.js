import React from 'react';
import CarForm from './Components/CarForm';
import CarList from './Components/CarList';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CarForm/>
      <CarList/>
      </header>
    </div>
  );
}

export default App;

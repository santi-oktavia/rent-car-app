import React from 'react';
import CarForm from './Components/CarForm';
import './App.css';
import './CSS/style.css';

function App() {
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded App">
      <header className="App-header">
        <h1>Rental Car Application</h1>
      </header>
      <div className="content">
        <CarForm/>
      </div>
    </div>
  );
}

export default App;

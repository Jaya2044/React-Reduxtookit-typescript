import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeView from './features/Cake/CakeView';
import IcecreamView from './features/Icecream/IcecreamView';
import UsersView from './features/Users/UsersView';

function App() {
  return (
    <div className="App">
      <CakeView />
      <hr />
      <IcecreamView />
      <hr />
      <UsersView />
    </div>
  );
}

export default App;

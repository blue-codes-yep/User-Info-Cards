import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
    <h1>User Info</h1>
    <UserCard />
    <div className="row"><UserCard />
    </div>
    </div>
  );
}

export default App;

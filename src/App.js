import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App">
      <h1 className="title">User Info</h1>
      <div className="container-fluid">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
     
    </div>

  );
}

export default App;

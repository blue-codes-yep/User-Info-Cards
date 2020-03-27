import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>User Info</h1>

        <UserCard />
        <div className="row">
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default App;

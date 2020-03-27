import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import { useSpring, animated } from 'react-spring'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'




const App = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (

    <div className="App">
      <h1 className="title">User Info</h1>
      <div className="container-fluid">


        <animated.div style={fade}> <UserCard /> </animated.div>
        <animated.div style={fade}> <UserCard /></animated.div>
        <animated.div style={fade}> <UserCard /> </animated.div>
        <animated.div style={fade}> <UserCard /></animated.div>

      </div>
    </div>


  );
}

export default App;

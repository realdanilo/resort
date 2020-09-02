//Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
//Components
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} />} />
        <Route exact path="/rooms" render={(rp) => <Rooms {...rp} />} />
        <Route exact path="/rooms/:id" render={(rp) => <SingleRoom {...rp} />} />
        <Route path="/" render={(rp) => <Error {...rp} />} />
      </Switch>
    </>
  );
}

export default App;

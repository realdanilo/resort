//Modules
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
//Components
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
import { RoomContext } from './context'
import items from './data'

function App() {
  const [loading, setLoading] = useState(true)
  const [rooms, setRooms] = useState(null)
  const [sortedRooms, setSortedRooms] = useState(null)
  const [featuredRooms, setFeaturedRooms] = useState(null)

  useEffect(() => {
    let cleanData = formatData(items)
    setRooms(cleanData)
    setSortedRooms(cleanData)
    setFeaturedRooms(cleanData.filter(r => r.featured === true))
    setLoading(false)
  }, [""])

  const formatData = (items) => {
    let temp = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(img => img.fields.file.url)
      return { ...item.fields, id, images }
    })
    return temp
  }
  const getRoom = (slug) => {
    if (rooms != null) {
      return rooms.find(room => room.slug === slug)
    }
    else {
      let backUp = formatData(items)
      return backUp.find(room => room.slug === slug)
    }
  }
  return (
    <RoomContext.Provider value={{ loading, rooms, sortedRooms, featuredRooms }}>

      <Navbar />
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} />} />
        <Route exact path="/rooms" render={(rp) => <Rooms {...rp} />} />
        <Route exact path="/rooms/:slug" render={(rp) => <SingleRoom {...rp} room={getRoom(rp.match.params.slug)} />} />
        <Route path="/" render={(rp) => <Error {...rp} />} />
      </Switch>
    </RoomContext.Provider>

  );
}

export default App;

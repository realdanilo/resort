//Modules
import React, { useReducer, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
//Components
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
import { RoomContext } from './context'
// import items from './data'
import client from "./contentful"
import { reducer } from './reducer'


let initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};
let items;

//getData
const getData = async () => {
  let response = await client.getEntries({ content_type: "beachRooms" });
  items = response.items;
  console.log(items)
  initialState = {
    loading: false,
    rooms: formatData(items),
    sortedRooms: formatData(items),
    featuredRooms: formatData(items).filter(r => r.featured === true),
    type: 'all',
    capacity: 0,
    minPrice: 0,
    maxPrice: Math.max(...formatData(items).map(r => r.price)),
    minSize: 0,
    maxSize: Math.max(...formatData(items).map(r => r.size)),
    breakfast: false,
    pets: false,
    price: Math.max(...formatData(items).map(r => r.price))
  }
}

// format data
const formatData = (items) => {
  let temp = items.map(item => {
    let id = item.sys.id
    let images = item.fields.images.map(img => img.fields.file.url)
    return { ...item.fields, id, images }
  })
  return temp
}

function App() {

  //useReducer
  const [state, dispatch] = useReducer(reducer, getData())
  console.log(state)

  //finding and returning a room
  const getRoom = (slug) => {
    return state.rooms.find(room => room.slug === slug)
  }

  return (
    <RoomContext.Provider value={{ state, dispatch }}>

      <Navbar />
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} />} />
        <Route exact path="/rooms" render={(rp) => <Rooms {...rp} rooms={state.rooms} />} />
        <Route exact path="/rooms/:slug" render={(rp) => <SingleRoom {...rp} room={getRoom(rp.match.params.slug)} />} />
        <Route path="/" render={(rp) => <Error {...rp} />} />
      </Switch>
    </RoomContext.Provider>

  );
}

export default App;

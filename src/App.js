//Modules
import React, { useState, useEffect, useReducer } from 'react';
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


const formatData = (items) => {
  let temp = items.map(item => {
    let id = item.sys.id
    let images = item.fields.images.map(img => img.fields.file.url)
    return { ...item.fields, id, images }
  })
  return temp
}
//Initial State
const initialState = {
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
const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER":
      let tempRooms;
      [action.newValue] == "all" ? tempRooms = [...state.rooms] : tempRooms = [...state.rooms].filter(room => room.type == [action.newValue])
      let newState = { ...state, [action.changeProp]: action.newValue, sortedRooms: tempRooms }
      return newState
    default:
      return state
  }
}
function App() {

  // using reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  const getRoom = (slug) => {
    if (state.rooms != null) {
      return state.rooms.find(room => room.slug === slug)
    }
    else {
      console.log("hitting room  = null")
      // let backUp = formatData(items)
      // return backUp.find(room => room.slug === slug)
    }
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

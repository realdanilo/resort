//Modules
import React, { useReducer } from 'react';
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
//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.newFilter }
    case "FILTER":
      let tempRooms = [...state.rooms]
      let { type, capacity, price, minSize, maxSize, breakfast, pets } = state;
      capacity = parseInt(capacity);
      price = parseInt(price);
      let breakfastCheck = breakfast;
      let petsCheck = pets;

      // filter by type
      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }
      // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter(room => room.capacity >= capacity);
      }
      // filter by price
      tempRooms = tempRooms.filter(room => room.price <= price);
      //filter by size
      tempRooms = tempRooms.filter(
        room => room.size >= minSize && room.size <= maxSize
      );
      //filter by breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }
      //filter by pets
      if (pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }

      return { ...state, sortedRooms: tempRooms, breakfast: breakfastCheck, pets: petsCheck }
    default:
      return state
  }
}


function App() {
  // using reducer
  const [state, dispatch] = useReducer(reducer, initialState)


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

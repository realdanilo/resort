import React, { useContext } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomContext } from '../context'

export default function RoomContainer() {
    const state = useContext(RoomContext)
    const { loading, rooms, sortedRooms } = state
    return (
        <div>
            {loading && "Loading..."}
            {!loading && <div> <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} /> </div>}
        </div>
    )
}

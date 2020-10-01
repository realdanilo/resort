import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default function FeaturedRooms() {
    const state = useContext(RoomContext)
    const { featuredRooms, loading } = state
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {loading && <Loading />}
                {!loading && featuredRooms.map(room => <Room key={room.id} room={room} />)}
            </div>

        </section>
    )
}

import React from 'react'
import Room from './Room'

export default function RoomList({ rooms }) {

    return (
        <div>

            {rooms && <section className="roomslist">
                <div className="roomslist-center">
                    {rooms.map(r => <Room key={r.id} room={r} />)}
                </div>
            </section>}
            {!rooms && <div className="empty-search">  <h4>No rooms match your search</h4></div>}

        </div>
    )
}

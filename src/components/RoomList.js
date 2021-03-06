import React, { memo } from 'react'
import Room from './Room'

function RoomList({ rooms }) {
    return (
        <div>

            {rooms && <section className="roomslist">
                <div className="roomslist-center">
                    {rooms.map(r => <Room key={r.id} room={r} />)}
                </div>
            </section>}
            {rooms.length == 0 && <div className="empty-search">  <h4>No rooms match your search</h4></div>}

        </div>
    )
}
export default memo(RoomList)
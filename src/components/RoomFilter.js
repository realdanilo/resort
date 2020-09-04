import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const findUnique = (items, type) => {
    return [... new Set(items.map(item => item[type]))]
}
const handleChange = (e) => {
    // console.log(e.target)
    //dispatch({type:"SELECTOR", action.changeProp:e.target.name, action.newValue:e.target.value })
}
export default function RoomFilter({ rooms }) {
    const { state, dispatch } = useContext(RoomContext)
    const { type, capacity, minPrice, maxPrice, minSize, maxSize, size, price, breakfast, pets } = state
    const uniqueSelectors = findUnique(rooms, "type").concat("all")
    const people = findUnique(rooms, "capacity")



    return (
        <section className="filter-container">
            <Title title="serach rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name={type} id="type" value={type} className="form-control" onChange={(e) => dispatch({ type: "FILTER", changeProp: "type", newValue: e.target.value })} >
                        {uniqueSelectors.map((opt, i) => <option key={i}>{opt}</option>)}

                    </select>
                </div>
                {/* end of select type */}
                {/* guess */}
                <div className="form-group">
                    <label htmlFor="capacity">Guess</label>
                    <select name={capacity} id="capacity" value={capacity} className="form-control" onChange={(e) => dispatch({ type: "FILTER", changeProp: "capacity", newValue: parseInt(e.target.value) })} >
                        {/* fix e.tar.get.value */}
                        {people.map((item, i) => <option key={i}>{item}</option>)}

                    </select>
                </div>
                {/* end of guess */}
            </form>
        </section>
    )
}

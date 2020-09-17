import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const findUnique = (items, type) => {
    return [...new Set(items.map(item => item[type]))]
}

export default function RoomFilter({ rooms }) {
    const { state, dispatch } = useContext(RoomContext)
    const { type, capacity, minPrice, maxPrice, minSize, maxSize, size, price, breakfast, pets } = state
    const uniqueSelectors = findUnique(rooms, "type").concat("all")
    const people = findUnique(rooms, "capacity")

    const handleChange = (e) => {
        e.stopPropagation();
        // targetFilter<< event
        const target = e.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        let newFilter = { [name]: value }

        dispatch({ type: "UPDATE", newFilter })
        dispatch({ type: "FILTER" })
    }


    return (
        <section className="filter-container">
            <Title title="serach rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={(e) => handleChange(e)} >
                        {uniqueSelectors.map((opt, i) => <option key={i}>{opt}</option>)}

                    </select>
                </div>
                {/* end of select type */}
                {/* guess */}
                <div className="form-group">
                    <label htmlFor="capacity">Guess</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={(e) => handleChange(e)}>
                        {/* fix e.tar.get.value */}
                        {people.map((item, i) => <option key={i}>{item}</option>)}

                    </select>
                </div>
                {/* end of guess */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range"
                        name="price"
                        id="price"
                        max={maxPrice}
                        min={minPrice}
                        value={price}
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                    />
                </div>
                {/* end of room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            min="0"
                            value={minSize}
                            onChange={(e) => handleChange(e)}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            max={maxSize}
                            onChange={(e) => handleChange(e)}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            id="pets"
                            onChange={(e) => handleChange(e)}
                        />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

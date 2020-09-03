import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import StyledHero from '../components/StyledHero'


export default function SingleRoom(props) {
    const { name, pets, price, size, type, breakfast, capacity, description, extras, images } = props.room
    const [main, ...secondaryImages] = images
    return (
        <div>
            <StyledHero image={main} >
                <Banner title={name} >
                    <Link to="/rooms" className="btn-primary">more Rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {secondaryImages.map((image, i) => <img src={image} key={i} alt={name} />)}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size} sqft</h6>
                        <h6>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                        <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
                        <h6>{breakfast && "Breakfast Included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, i) => <li key={i}> - {item}</li>)}
                </ul>
            </section>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
export default function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Our rooms"  >
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

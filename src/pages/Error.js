import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Error() {
    return (
        <div>
            <Hero>
                <Banner title="error" subtitle="page not found">
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

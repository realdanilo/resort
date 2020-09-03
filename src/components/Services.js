import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default function Services() {
    const myServices = [
        {
            icon: <FaCocktail />,
            title: "Free cocktails",
            info: "Free cocktails for the first 10 adults every monday after 10pm."
        },
        {
            icon: <FaHiking />,
            title: "Hiking Mountains",
            info: "We offer a great view to hike mountains right outside your room."
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Shuttle is next to the green house and we give a free pass for members that stay over 2 weeks"
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Yep. We have the best beer also."
        },
    ]
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {myServices.map((service, i) => <article className="service" key={i}>
                    <span>{service.icon}</span>
                    <h6>{service.title}</h6>
                    <p>{service.info}</p>
                </article>)}
            </div>
        </section>
    )
}

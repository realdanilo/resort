import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default function Services() {
    const myServices = [
        {
            icon: <FaCocktail />,
            title: "Free cocktails",
            info: "lorem 123 fsdoinas asd ionsda dasn osidasd"
        },
        {
            icon: <FaHiking />,
            title: "Hiking Mountains",
            info: "lorem 123 fsdoinas asd ionsda dasn osidasd"
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "lorem 123 fsdoinas asd ionsda dasn osidasd"
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "lorem 123 fsdoinas asd ionsda dasn osidasd"
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

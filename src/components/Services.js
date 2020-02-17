import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                " Lorem ipsum dolor sit amet consecteur adipisicing elit.Magni, corporis!"
            },
            {
                icon: <FaHiking />,
                title: "Endles Hiking",
                info:
                " Lorem ipsum dolor sit amet consecteur adipisicing elit.Magni, corporis!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                " Lorem ipsum dolor sit amet consecteur adipisicing elit.Magni, corporis!"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                " Lorem ipsum dolor sit amet consecteur adipisicing elit.Magni, corporis!"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

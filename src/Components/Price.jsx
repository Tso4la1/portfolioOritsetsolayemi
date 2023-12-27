import React from 'react'
import { Icons } from './Icons';


const header = {
    subHeading: "Popular Tools for my Project Creations",

};

const state = [
    {
        id: 1,
        header: "React",
        heading: "react",
        msg1: "Web Design (UX/UI)",

    },

    {
        id: 2,
        header: "JavaScript",
        heading: "js",
        msg1: "Web Design",

    },

    {
        id: 3,
        header: "CSS",
        heading: "css",
        msg1: "Web Development",

    },
]

export const Price = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h2 className="mainHeader">
                        {header.subHeading}
                    </h2>

                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {
                        state.map((prices) => (
                            <div className="col-4" key={prices.id}>
                                <div className="price">
                                    <div className="price_rs">
                                        {prices.header}
                                    </div>
                                    <div className="priceHeading"><Icons name={prices.heading} /></div>

                                    <ul>
                                        <li>{prices.msg1}</li>
                                    </ul>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

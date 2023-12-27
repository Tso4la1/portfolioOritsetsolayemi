import React from 'react'
import { Icons } from './Icons'

const header = {
    mainHeader: "My Expertise",
    subHeading: "Areas I can provide A Range of Digital Services",
}

const state = [
    {
        id: 1,
        icon: "Ui",
        heading: "Ui/Ux Design",
        text: "esse magni amet illum vel illo consequuntur in quibusdam voluptates sapiente quas."
    },

    {
        id: 2,
        icon: "web",
        heading: "Web Design",
        text: "esse magni amet illum vel illo consequuntur in quibusdam voluptates sapiente quas."
    },

    {
        id: 3,
        icon: "software",
        heading: "Web Development",
        text: "esse magni amet illum vel illo consequuntur in quibusdam voluptates sapiente quas."
    },


]

export const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row bgMain">
                        {
                            state.map((info) => (
                                <div className="col-4 bgMain">
                                    <div className="services_box">
                                        <Icons name={info.icon} className="commonIcons" />
                                        <h4 className="services_box-header">{info.heading}</h4>
                                        <p className="services_box-p">{info.text}</p>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

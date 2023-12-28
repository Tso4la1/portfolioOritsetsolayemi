import React from 'react'

export const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About Me</h1>
                    <div className="underline-border"></div>
                </div>

                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/DLOR8238.JPG" alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>Creative Ui & Ux Design <br /> based in Delta State, Nigeria</h1>
                            <div className="about_info">
                                <p>One of my key strengths lies in my proficiency with modern CSS frameworks, particularly Tailwind CSS and Styled-Components.  Leveraging these tools, I've streamlined the development process,  resulting in more efficient code and accelerated project timelines. Additionally, my experience with React has allowed me to build scalable and modular components,contributing to the development of  robust and maintainable codebases.
                                </p>
                                <div className="about_buttons">
                                    <a href="#about" className="btn btn-outline">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

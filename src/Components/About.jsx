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
                                <p>Lorem ipsum dolor sit amet consectetur
                                    <br /> adipisicing elit. Similique, vitae voluptates
                                    dolore quos sapiente <br /> aliquid totam quibusdam
                                    eligendi! Praesentium ea <br /> assumenda aliquid modi
                                    necessitatibus nostrum suscipit dolorem molestias eaque a!
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

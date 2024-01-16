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
                                <div className="about-info-p">
                                    <p>One of my key strengths lies in my proficienvy with modern CSS frameworks,
                                        particularly Tailwind CSS and Styled-Components. Leveraging these tools, I've streamlined the development process, resuilting in more efficient code and accelerated project timelines. Additionally, my experience with React has allowed me to build scalable and modular components, contributinf to the development of robust and maintainable codebases.
                                    </p>
                                </div>
                                <div className="about_buttons">
                                    <a href="https://docs.google.com/document/d/1-_OV1dwAeV89EOBFtq7hcMLFEG1XaQNxs-d1vwS8EGs/edit?usp=sharing" className="btn btn-outline">
                                        View CV
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

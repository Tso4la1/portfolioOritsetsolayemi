import React from 'react'

export const Header = () => {
    return (
        <header id="#Header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello, I Am</h2>
                                <h1>Omayuku Oritsetsolayemi</h1>
                                <p> As a seasoned developer, my expertise lies in crafting seamless and visually appealing user interfaces using a stack of technologies that includes JavaScript, HTML, CSS, Tailwind CSS, Styled-Components, and React.</p>
                                <div className="header_buttons">
                                    <a href="header" className="btn btn-outline">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 image-container">
                        <img src="/pass-picture.png" alt="Omayuku Oritsestolayemi 1" className='image' />
                    </div>
                </div>
            </div>
        </header>
    )
}

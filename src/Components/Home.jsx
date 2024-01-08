import React from 'react';
import { Portfolio } from './Portfolio/Portfolio';
import { About } from './About';
import { Services } from './Services';
import { Price } from './Price';

export const Home = () => {
    return (
        <div>
            <Portfolio />
            <About />
            <Services />
            <Price />
        </div>
    )
}

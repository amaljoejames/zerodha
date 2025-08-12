import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import Team from './Team';

function AboutPage() {
    return ( 
        <>
        <Hero/>
        <Team/>
        </>
    );
}

export default AboutPage;
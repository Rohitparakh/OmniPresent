import React from 'react';
import '../App.css';
import HeroSection from '../components/home_project/HeroSection';
import Footer from '../components/home_project/Footer';
import WhyUs from '../components/home_project/WhyUs';
import Cases from '../components/home_project/Cases';
import MoreCTAFirst from '../components/home_project/MoreCtaFirst';
import MoreCTASecond from '../components/home_project/MoreCtaSecond';
import Services from '../components/home_project/Services';
import Results from '../components/home_project/Results';
import Testimonials from '../components/home_project/Testimonials';
import { LetsConnect } from '../components/about';
import Header from '../components/home_project/Header';
import LetsTalkContent from '../components/home_project/LetsTalkContent';

function HomePage() {
    return (
        <div>
            <Header/>
            <HeroSection />
            <hr className='mt-60'/>
            <Footer />
            <WhyUs />
            <Cases/>
            <MoreCTAFirst />
            {/* <MoreCTASecond /> */}
            <Services />
            <Results />
            <Testimonials />
            {/* <LetsTalkContent/> */}
            <LetsConnect/>
            {/* <LetsTalk/> */}
        </div>
    );
}

export default HomePage;
